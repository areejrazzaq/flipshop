import AvailableListing from './AvailableListing'
import '../../index.css'
import ListHeading  from './ListHeading';
import { Link } from 'react-router-dom';

// this listing component will be used to render the complete listings section for home 
// page only 
// available listing component will render all the listing 

const Listing = (props) => {
    return (
      <section id="blog" className="blog assets">
        <ListHeading/>
        <AvailableListing isHome = {props.isHome}/>
        <div className="container mt-4 d-flex justify-content-center" data-aos="fade-up">
          <Link to="/assets">view more</Link>
        </div>
      </section>
    )

}

export default Listing; 