import styles from "./index.module.css";

import { useNavigate } from "react-router-dom";
import {useCallback, useEffect, useState} from "react";

import {deletePostId,postid,header,showmodal} from "../../atom";
import { preupdate } from "../../state/post";
import { useRecoilValue,useRecoilState } from "recoil";

import Button from "../Button";
import axios from "axios";
import DeleteModal from "../DeleteModal";

const ClickDots =({post})=>{

    const nav=useNavigate();
    // const postId=post.postId;

    const [deletepostid,setDeletepostid]=useRecoilState(deletePostId);
    // const [postId,setPostId]=useRecoilState(postid);
    
    
    console.log("clickdots",post.postId);

    //업데이트 전 사진들과 내용저장
    const [preup,setPreup]=useRecoilState(preupdate);
    useEffect(()=>{
        setPreup({
            imgs:post.imgs,
            content:post.content,
        })
    },[]);

    //삭제팝업
    const[show,setShow]=useState(false);


    return(
       <div className={styles.wrapper}>
            {show&&<DeleteModal show={setShow} postid={post.postId}/>}
            <div className={styles.bottomLine} onClick={(e)=>{
                e.preventDefault();
                nav(`/Main/updatePost/${post.postId}`);
            }}>수정하기</div>
            <div className={styles.bottomLine}>신고하기</div>
            <div className={styles.ele} onClick={(e)=>{
                e.preventDefault();
                setShow(true);
            }}>삭제하기</div>
       </div>
            
    )

};

export default ClickDots;