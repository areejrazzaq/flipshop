import '../../index.css';
import image from '../../assets/img/Capture.PNG'
import img from './hero-img.svg'
import Button from '../UI/Button/Button'
import { useRouteLoaderData } from 'react-router-dom';


const Hero = () => {
  const {token, role} = useRouteLoaderData('root');
    return(<div>
        <section id="hero" className="hero">
          <div className="container position-relative">
            <div className="row gy-5" data-aos="fade-in">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                <h2>#1<span>Marketplace to Buy and Sell Digital Assets in Pakistan.</span></h2>
                <p>Buy an online business, become an acquisition entrepreneur, and invest in digital real estate.</p>
                <Button text = 'Sell Now' link={token && role==='seller' ? '/SellNow' : '/login'}/>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <img src={img} className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
              </div>
            </div>
          </div>
        </section>
        <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row post-author d-flex">
            <div className="col-lg-3 col-md-12 flex-column">
              <img id="img" src={image} className="flex-shrink-0 align-items-md-right " alt="" />
            </div>
            <div className="col-lg-8 col-md-12">
              <br/>
                <div className="flex-shrink-0">
                  <h4>We take trust and integrity to a whole new level.</h4>
                  <br/>
                  <p>
                  Our expert vetting team reviews the stated financial and operational performance. Plus we go direct to the source, adding financial and operational metrics from leading platforms like Shopify, Stripe, Quickbooks Online, Admob, Google Analytics and more. Keep an eye out for the verification icons when you consider listings.
                  </p>
                  <br/>
                </div>
                <Button text='Learn more about listing' link='/services'/>
              </div>
            </div>

          </div>
      </section>
    </div>)
}

export default Hero;