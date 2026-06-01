import '../styles/Navbar.css'
import { Link } from "react-router-dom";
export default function Navbar() {
   return (
      <nav className="navbar">
         <h2>Portfolio</h2>

         <div className="links">
            <Link to="/">Home</Link>
            <Link to="/ProjectsPage">Projects</Link>
         </div>
      </nav>
   );
}

// export default Navbar