import styles from './Model.module.css'
import {Fragment} from 'react'
import ReactDOM from 'react-dom'

const Backdrop = props => {return(<div className = {styles.backdrop} onClick = {props.onClick}></div>)}
const ModalOverlay = props => {return(<div className = {styles.modal}><div className = {styles.content}>{props.children}</div></div>)}

const poratlElement = document.getElementById('overlays')

const Modal = props => {return(<Fragment>
{ReactDOM.createPortal(<Backdrop onClick = {props.onClick}/>, poratlElement)}
{ReactDOM.createPortal(<ModalOverlay> {props.children} </ModalOverlay>, poratlElement)}
</Fragment>)}



export default Modal;
