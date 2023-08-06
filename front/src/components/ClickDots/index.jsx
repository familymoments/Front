import styles from "./index.module.css";

import { useNavigate } from "react-router-dom";
import {useCallback, useState} from "react";

import {deletePostId,postid} from "../../atom";
import { useRecoilValue,useRecoilState } from "recoil";

const ClickDots =({post,showmodal})=>{

    const nav=useNavigate();

    //const postId=post.postId;

    const [deletepostid,setDeletepostid]=useRecoilState(deletePostId);
    const [postId,setPostId]=useRecoilState(postid);
    
    
    console.log("clickdots",deletepostid);

    
    const [popupOpen,setPopupOpen] = useState(false);
    const showDeletePopup=(e)=>{
        e.preventDefault();
        setPostId(post.postId);
        showmodal("DELETE");
        console.log(postId);
    };

    return(
       <div className={styles.wrapper}>
            <div className={styles.bottomLine} onClick={(e)=>{
                e.preventDefault();
                nav(`/Main/updatePost/${postId}`, {state:{post}})
            }}>수정하기</div>
            <div className={styles.bottomLine}>신고하기</div>
            <div className={styles.ele} onClick={showDeletePopup}>삭제하기</div>
       </div>
            
    )

};

export default ClickDots;