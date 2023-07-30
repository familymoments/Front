import Styles from './CertificationButton.module.css';
function CertificationButton(props){
    return(
    <div className={Styles.wrapper}>
        <button className={Styles.button}>{props.text}</button>
    </div>)
}
export default CertificationButton;