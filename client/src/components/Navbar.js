import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Responders from "./Responders";
import logo from '../logo.png';

function Navbar({ currentUser, handleLogout }) {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, [currentUser]);

    const handleButtonClick = () => {
        if (!loggedIn) {
            navigate("/login");
        }
    };

    const handleLoginLogout = () => {
        if (loggedIn) {
            handleLogout();
            setLoggedIn(false);
        } else {
            navigate("/login");
        }
    };

    const renderLinks = () => {
        return (
            <>
                <button className="navbar-button" onClick={handleButtonClick}>
                    <Link to="/">Home</Link>
                </button>
                <button className="navbar-button" onClick={handleButtonClick}>
                    <Link to="/responders" element={<Responders />}>
                        Responders
                    </Link>
                </button>
            </>
        );
    };

    return (
        <header>
            <div className="navbar flex items-center justify-between">
                <div className="w-20 h-20 bg-no-repeat bg-center mr-4 ml-2" style={{ backgroundImage: `url(${logo})`, backgroundSize: 'contain', objectFit: 'contain' }}></div>
                <h1 className="navbar-title text-lg">Chaverim of Greater Washington</h1>
                <div className="links flex-1 flex items-center justify-center space-x-4">{renderLinks()}</div>
                <div className="flex items-center">
                    {loggedIn && (
                        <p className="navbar-title text-lg flex-1 mr-6">
                            Welcome, {currentUser.name} !
                        </p>
                    )}
                    <button className="navbar-button mr-5" onClick={handleLoginLogout}>
                        <Link to="/login">{loggedIn ? "Logout" : "Login"}</Link>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
