import '../../index.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () =>{
  
    return(
  <header id="header" className="header d-flex align-items-center">

    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <Link to="/" className="logo d-flex align-items-center">
        <h1>Flip Shop<span>.</span></h1>
      </Link>
      <nav id="navbar" className="navbar">
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>

          <li className="dropdown"><NavLink to="/assets"><span>Assets</span></NavLink>
            {/* <ul>
              <li className="dropdown"><a href="abc.com"><span>Blogs</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="abc.com">Blogs Type 1</a></li>
                  <li><a href="abc.com">Blogs Type 2</a></li>
                  <li><a href="abc.com">Blogs Type 3</a></li>
                  <li><a href="abc.com">Blogs Type 4</a></li>
                </ul>
              </li>
              <li><a href="abc.com">Daraz</a></li>
            </ul> */}
          </li>

          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/team">Team</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>

      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header>)
}

export default Header; 