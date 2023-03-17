import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import "./App.css"

function App() {

  const [breakdowns, setBreakdowns] = useState([])
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState([])
  const navigate = useNavigate()

  const updateUser = (user) => setCurrentUser(user)

  // useEffect(() => {
  //   fetch("/authorized_user")
  //     .then((r) => {
  //       if (r.ok) {
  //         r.json().then(user => {
  //           updateUser(user);
  //           console.log(user);
  //           fetchBreakdowns()
  //         });
  //       } else {
  //         setErrors(true)
  //       }
  //     })
  // },[])

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
    fetch("/logout", {
      method: "DELETE"
    })
      .then(() => {
        setCurrentUser(false)
        navigate("/login")
      })
  }

  return (
    <div>
      <Navbar currentUser={currentUser} handleLogout={handleLogout}/>
      <Routes>
        <Route path="/login" element={<Login updateUser={updateUser}/>} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
