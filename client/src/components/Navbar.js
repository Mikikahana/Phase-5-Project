import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Responders from "./Responders";

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
            // Redirect to login page if user is not logged in
            navigate("/login");
        }
    };

    const renderLinks = () => {
        return (
            <>
            <button onClick={handleButtonClick}>
                <Link to="/">Home</Link>
            </button>
            <button onClick={handleButtonClick}>
                <Link to="/responders" element={<Responders />}>
                Responders
                </Link>
            </button>
            </>
        );
    };

    return (
        <header>
            <div className="logo">
                <h1>Chaverim of Greater Washington</h1>
            </div>
            <nav>
            {renderLinks()}
            {loggedIn && currentUser.name}
            <button onClick={handleLoginLogout}>
                <Link to="/login">
                {loggedIn ? "Logout" : "Login"}
                </Link>
            </button>
            </nav>
        </header>
        );
    }

    export default Navbar;