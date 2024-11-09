import './Button.css'; 
import { Link } from 'react-router-dom';

const Button = (props) => {
    return(
        <div className="d-flex justify-content-center justify-content-lg-start">
            <Link to={props.link} className="btn button">{props.text}</Link>
        </div>
    )
}

export default Button; 