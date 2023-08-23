import styles from './Alam.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {header, userImg} from "../../atom";
import { useRecoilValue } from 'recoil';
import PostUserHeader from '../../components/PostUserHeader';
function Alam(it){
    const SERVER = process.env.REACT_APP_SERVER_URL;
    const headers = useRecoilValue(header);
    const postuserImg=useRecoilValue(userImg);
    console.log(headers);
    axios.get(`${SERVER}/users/invitation`,{headers})
    .then(function (res) {
        console.log(res);
         console.log(res.data.result);
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
    {/* <div>
    <PostUserHeader
         userImg={it.profileImg}
         username={it.writer}
         postdate={it.createdAt}/>
    </div> */}
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