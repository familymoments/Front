import Styles from './Login.module.css';
import Loginbutton from '../components/Loginbutton';

function Login(){

    return(
    <div>
    <div className={Styles.top}>
        `<div className= {Styles.loginTopLogo}>
            <img src={process.env.PUBLIC_URL + '/mainLogo.png'} /> 
        </div>
        <div>
        <h2 className = {Styles.font}>안녕하세요 :) <p>패밀리 모먼트입니다.</p>
        <p id = {Styles.font2}>가족들과 소중한 순간을 공유해 보세요.</p></h2>
        </div>
    </div>
   
            <div>
                <input type='text' name='input_id' placeholder='ID' />
            </div>
            <div>
                <input type='password' name='input_pw' placeholder='Password'/>
            </div>
            <div>
                <Loginbutton texts = "순간을 가족에게 공유하기"></Loginbutton>
            </div>
        
    </div>
    );
}

export default Login;