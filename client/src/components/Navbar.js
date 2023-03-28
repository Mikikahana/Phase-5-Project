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
            navigate("/login");
        }
    };

    const renderLinks = () => {
        return (
            <>
                <button class="navbar-button" onClick={handleButtonClick}>
                    <Link to="/">Home</Link>
                </button>
                <button class="navbar-button" onClick={handleButtonClick}>
                    <Link to="/responders" element={<Responders />}>
                        Responders
                    </Link>
                </button>
            </>
        );
    };

    return (
        <header>
            <div class="navbar flex items-center justify-between">
                {/* <img src={logo} alt="Logo" class="logo"/> {"https://chaverimgw.org/wp-content/uploads/2022/09/logo.png"} */}
                <h1 class="navbar-title text-lg">Chaverim of Greater Washington</h1>
                <div class="links flex space-x-4">{renderLinks()}</div>
                <div class="flex items-center">
                    {loggedIn && (
                        <p class="navbar-title">
                            Welcome, {currentUser.name}!
                        </p>
                    )}
                    <button class="navbar-button" onClick={handleLoginLogout}>
                        <Link to="/login">{loggedIn ? "Logout" : "Login"}</Link>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
