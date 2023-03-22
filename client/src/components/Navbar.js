import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Responders from "./Responders";

function Navbar({ currentUser, handleLogout }) {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (currentUser) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, [currentUser]);

    const handleLoginLogout = () => {
        if (loggedIn) {
            handleLogout();
            setLoggedIn(false);
        } else {
        // navigate to the login page or show a login modal
        }
    };

    return (
        <header>
        <div className="logo">
            <h1>Chaverim of GW</h1>
        </div>
        <nav>
            <button>
            <Link to="/">Home</Link>
            </button>
            <button>
            <Link to="/responders" element={<Responders />}>
                Responders
            </Link>
            </button>
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