import './Navbar.css'

function Navbar(){
   return(
      <nav className="navbar">
         <h2>Portfolio</h2>

         <div className="links">
            <a href="/">Home</a>
            <a href="/ProjectsPage">Projects</a>
         </div>
      </nav>
   )
}

export default Navbar