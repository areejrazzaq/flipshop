import { Link } from "react-router-dom"
import styles from './Error.module.css'
import { useRouteError } from "react-router-dom";

export default function ErrorComponent(){
    const error = useRouteError();

    console.log('error.status')
    console.log(error.status)

    let title = 'Something Went Wrong'
    let message = 'Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable'

    if(error.status === 500){
        title = 'No data Found'
        message = error.data.message;
    }

    if(error.status === 404){
        title = 'Oops! Page Not Be Found'
    }

    return	<div className={styles.body}><div id="notfound">
    <div className={styles.notfound}>
        <div className={styles['notfound-404']}></div>
        <h1>{error.status}</h1>
        <h2>{title}</h2>
        <p>{message}</p>
        <Link to="/">Back to homepage</Link>
    </div>
</div></div>
}