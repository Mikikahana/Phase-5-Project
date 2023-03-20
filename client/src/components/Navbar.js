import { Link } from "react-router-dom";
import Responders from "./Responders";

function Navbar() {
    return (
    <header>
        <div className="logo">
        <h1>Chaverim of GW</h1>
        </div>
        <nav>
        <Link to="/">Home</Link>
        <button><Link to="/responders" element={<Responders/>}>Responders</Link></button>
        </nav>
    </header>
    );
}

export default Navbar;