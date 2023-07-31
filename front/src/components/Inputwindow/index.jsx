import Styles from './Inputwindow.module.css';
function Inputwindow(props){

    return(
    <div>
        <input className = {Styles.shape} placeholder={props.placeholder}></input>
    </div> );
}

export default Inputwindow;