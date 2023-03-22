import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import BreakdownPage from './components/BreakdownPage';
import BreakdownEditForm from './components/BreakdownEditFrom'
import BreakdownForm from './components/BreakdownForm';
import Responders from './components/Responders';
import "./App.css"

function App() {

  const [breakdowns, setBreakdowns] = useState([])
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [currentBreakdown, setCurrentBreakdown] = useState(null)
  const navigate = useNavigate()
  const updateUser = (user) => {
    setCurrentUser(user);
    localStorage.setItem('currentUser',JSON.stringify(user));
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      updateUser(user);
    }
    fetch("/authorized_user")
      .then((r) => {
        if (r.ok) {
          r.json().then(user => {
            updateUser(user);
            fetchBreakdowns()
          });
        }
      })
  },[])

  const fetchBreakdowns = () => {
    fetch("/breakdowns")
      .then(r => {
        if(r.ok){
          r.json().then(setBreakdowns)
        } else {
          r.json().then(data => setErrors(data.error))
        }
      })
  }

  function handleLogout() {
    setCurrentUser(false);
    navigate("/login");
    fetch("/logout", {
      method: "DELETE"
    });
  }

  return (
    <div>
      <Navbar currentUser={currentUser} handleLogout={handleLogout}/>
      <Routes>
        <Route path="/login" element={<Login updateUser={updateUser}/>} />
        <Route exact path="/breakdowns/:id" element={<BreakdownPage currentBreakdown={currentBreakdown}/>}/>
        <Route path="/breakdowns/new" element={<BreakdownForm currentUser={currentUser}/>}/>
        <Route path="/breakdowns/:id/edit" element={<BreakdownEditForm/>} />
        <Route exact path="/" element={<Homepage setCurrentBreakdown={setCurrentBreakdown}/>} />
        <Route path="/responders" element={<Responders/>} />
      </Routes>
    </div>
  );
}

export default App;
