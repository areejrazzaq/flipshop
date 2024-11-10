import '../../../index.css';
import { Link } from 'react-router-dom';

const Hero = props => {
    return(<div className="breadcrumbs">
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>{props.title}</h2>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="container">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li>{props.page}</li>
          </ol>
        </div>
      </nav>
    </div>
    )
}

export default Hero; 