import { Link } from 'react-router-dom';
import '../../index.css'
const Footer = () => {
return(<footer id="footer" className="footer">

<div className="container">
  <div className="row gy-4">
    <div className="col-lg-5 col-md-12 footer-info">
      <Link to='/' className="logo d-flex align-items-center">
        <span>Flip Shop</span>
      </Link>
      <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
      <div className="social-links d-flex mt-4">
        <Link to='/' className="twitter"><i className="bi bi-twitter"></i></Link>
        <Link to='/' className="facebook"><i className="bi bi-facebook"></i></Link>
        <Link to='/' className="instagram"><i className="bi bi-instagram"></i></Link>
        <Link to='/' className="linkedin"><i className="bi bi-linkedin"></i></Link>
      </div>
    </div>

    <div className="col-lg-2 col-6 footer-links">
      <h4>Useful Links</h4>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/assets'>Assets</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/about'>About Us</Link></li>

        <li><Link to='/contact'>Contact Us</Link></li>
      </ul>
    </div>

    <div className="col-lg-2 col-6 footer-links">
      <h4>Our Services</h4>
      <ul>
        <li><Link to='/services'>Legal</Link></li>
        <li><Link to='/services'>Marketplace</Link></li>
        <li><Link to='/services'>Management</Link></li>
        <li><Link to='/services'>Marketing</Link></li>

      </ul>
    </div>

    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
      <h4>Contact Us</h4>
      <p>
        Street 8 Sector H-12, <br/>
        Capital Territory, <br/>
        Islamabad<br/><br/>
        <strong>Phone:</strong> +151 12345678<br/>
        <strong>Email:</strong> flipshop@gmail.com<br/>
      </p>

    </div>

  </div>
</div>

<div className="container mt-4">
  <div className="copyright">
    &copy; Copyright <strong><span>Flip Shop</span></strong>. All Rights Reserved
  </div>
  <div className="credits">
   
    Designed by <Link to="/">Huda Fatima</Link>
  </div>
</div>

</footer>)
}

export default Footer; 