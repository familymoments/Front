import styles from './Alam.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {header, profileimg, userImg} from "../../atom";
import { useRecoilValue } from 'recoil';
import PostUserHeader from '../../components/PostUserHeader';
import { useState } from 'react';
function Alam(it){
    const SERVER = process.env.REACT_APP_SERVER_URL;
    const headers = useRecoilValue(header);
    const postuserImg=useRecoilValue(userImg);
    const [familyname, setfamilyName] = useState('');
    const [profImg, setProfImg] = useState('');
    const [nickName, setNickName] = useState("");
    axios.get(`${SERVER}/users/invitation`,{headers})
    .then(function (res) {
         setfamilyName (res.data.result[0].familyName);
         setNickName(res.data.result[0].nickname);
         setProfImg(res.data.result[0].profileImg);
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

    </div>
        <hr className={styles.hr}/>
        <div  className={styles.h1container}>
        <p className = {`${styles.h1} ${styles.h1detail}`}>읽음</p>
    </div>
    <list className={styles.alamcontainer}>
        <img className={styles.img} src={profImg} alt="프로필 사진"></img>
        <span className={styles.nickname}>{nickName}</span><span className={styles.text}>님 새로운 사진을 업로드해주세요.</span>
    </list>
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