import styles from "./index.module.css";

import { useNavigate } from "react-router-dom";



const ClickDots =(props)=>{

    const nav=useNavigate();

    const postId=props.postId;

    return(
       <div className={styles.wrapper}>
            <div className={styles.bottomLine} onClick={(e)=>{
                e.preventDefault();
                nav(`/Main/updatePost/${postId}`)
            }}>수정하기</div>
            <div className={styles.bottomLine}>신고하기</div>
            <div className={styles.ele}>삭제하기</div>
       </div>
            
    )

};

export default ClickDots;