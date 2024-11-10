import '../../index.css'
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import './header.css'

const Header2 = () =>{

    function mobileNavToggle() {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        const mobileNavShow = document.querySelector('.mobile-nav-show');
        const mobileNavHide = document.querySelector('.mobile-nav-hide');
        mobileNavShow.classList.toggle('d-none');
        mobileNavHide.classList.toggle('d-none');
      }
      useEffect(() => {
        const selectHeader = document.querySelector('#header');
        if (selectHeader) {
          let headerOffset = selectHeader.offsetTop;
          let nextElement = selectHeader.nextElementSibling;
    
          const headerFixed = () => {
            if ((headerOffset - window.scrollY) <= 0) {
              selectHeader.classList.add('sticked');
              if (nextElement) nextElement.classList.add('sticked-header-offset');
            } else {
              selectHeader.classList.remove('sticked');
              if (nextElement) nextElement.classList.remove('sticked-header-offset');
            }
          }
          window.addEventListener('load', headerFixed);
          document.addEventListener('scroll', headerFixed);
        }
      }, []);
        
    return(
        <header className="header d-flex align-items-center" id="header">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <Link to="/" className="logo d-flex align-items-center">
                    <h1>Flip Shop<span>.</span></h1>
                </Link>
            <nav className="navbar justify-content-end nav-elements" id="navbar">
                <ul className='navbar-nav navbar-list'>
                    <li className="nav-item"><NavLink to="/" end>Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/assets"><span>Assets</span></NavLink></li>
                    <li className="nav-item"><NavLink to="/services">Services</NavLink></li>
                    <li className="nav-item"><NavLink to="/about">About</NavLink></li>
                    <li className="nav-item"><NavLink to="/team">Team</NavLink></li>
                    <li className="nav-item"><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
            </div>
            <i className="mobile-nav-toggle mobile-nav-show bi bi-list" onClick={mobileNavToggle}></i>
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" onClick={mobileNavToggle}></i>
        </header>
    )
}

export default Header2; 