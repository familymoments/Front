import styles from './Login.module.css';


function Login(){

    return(
    
    <div className={styles.top}>
        `<div className= {styles.loginTopLogo}>
            <img src={process.env.PUBLIC_URL + '/mainLogo.png'} /> 
        </div>
        <div>
        <h2 className = {styles.font}>안녕하세요 :) <p>패밀리 모먼트입니다.</p>
        <p id = {styles.font2}>가족들과 소중한 순간을 공유해 보세요.</p></h2>
        </div>
    </div>
    );
}

export default Login;