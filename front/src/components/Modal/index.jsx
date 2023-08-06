import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import Button from "../Button";

import { deletePostId,postid } from "../../atom";
import { useRecoilState, useRecoilValue } from "recoil";

const Modal  = ({showmodal,modalmode})=>{
    let content=null;
    // mode 에 따라 안의 내용 바꿔줄거임~
    const [mode,setMode]=useState(modalmode);

    const [deletepostid,setDeletepostid]=useRecoilState(deletePostId);
    const postId=useRecoilValue(postid);

    const nav=useNavigate();

    

    if(mode==="DELETE"){
        content=<div className={styles.container}>
            <div className={styles.text}>
                게시글을 <br/>삭제하시겠습니까?
            </div>
            <div>
                <Button title="삭제" btn={styles.btn1} onClick={(e)=>{
                    e.preventDefault();
                    console.log('삭제하겠음?')
                    //삭제코드
                    setDeletepostid(postId);
                    setMode("DELETEdone")
                }}/>
                <Button type="button" title="취소" btn={styles.btn2} onClick={showmodal}/>
            </div>
        </div>
    }else if(mode==="DELETEdone"){
        content=<div className={styles.container}>
        <div className={styles.text}>
            삭제가 완료되었습니다.
        </div>
        <div>
            <Button title="확인" btn={styles.deletedonebtn} onClick={()=>{
                showmodal();
                nav("/Main/postlist");
            }}/>
            
        </div>
    </div>
    }

    return (
        <div className={styles.wrapper}>
            {content}
        </div>
    )
};

export default Modal;