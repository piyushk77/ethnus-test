import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";
function Nav(){
    return(
        <nav className="navbar">
            <Link to="/" class="navbar-brand">Ethnus</Link>
            <div class="nav">
            <Link to="/home" class="nav-link">Home</Link>
            <Link to="/about" class="nav-link">About</Link>
            <Link to="/blog" class="nav-link">Blog</Link>
            <Link to="#" class="nav-link">Contact</Link>
            </div>
        </nav>
    )
 }

 export default Nav;