import styles from './Alam.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {header} from "../../atom";
import { useRecoilValue } from 'recoil';
import PostUserHeader from '../../components/PostUserHeader';
function Alam(props){
    const SERVER = process.env.REACT_APP_SERVER_URL;
    const token = useRecoilValue(header);
    axios.get(`${SERVER}/users/invitation`,{token})
    .then(function (res) {
         
    }).catch(function (err) {
       console.log(err);
    });
    return(
    <div>
        <div className = {styles.topper}>
            <p className = {styles.top}>알림</p>
        </div>
        <div  className={styles.h1container}>
        <p className = {styles.h1}>읽지 않음</p>
        <Modal/>
    </div>
        <hr className={styles.hr}/>
        <div  className={styles.h1container}>
        <p className = {`${styles.h1} ${styles.h1detail}`}>읽음</p>
    </div>
    <PostUserHeader/>
    </div>
    );}
export default Alam;
function Modal(){
    return(
        <div>
            <div>
                
            </div>
        </div>
    );
}