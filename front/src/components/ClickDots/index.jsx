import styles from "./index.module.css";

import { useNavigate } from "react-router-dom";
import {useState} from "react";



const ClickDots =({post,showmodal})=>{

    const nav=useNavigate();

    const postId=post.postId;

    
    const [popupOpen,setPopupOpen] = useState(false);
    const showDeletePopup=(e)=>{
        e.preventDefault();
        showmodal();
    };

    return(
       <div className={styles.wrapper}>
            <div className={styles.bottomLine} onClick={(e)=>{
                e.preventDefault();
                nav(`/Main/updatePost/${postId}`, {state:{post}})
            }}>수정하기</div>
            <div className={styles.bottomLine}>신고하기</div>
            <div className={styles.ele} onClick={showDeletePopup}>삭제하기</div>
            {popupOpen&&<div className={styles.popup}>게시글을 삭제하시겠습니까? </div>}
       </div>
            
    )

};

export default ClickDots;