import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./index.module.css";
import Button from "../Button";

import { header } from "../../atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { featposts } from "../../state/post";

import axios from "axios";

const DeleteModal  = ({show,postid})=>{
    let content=null;
    // mode 에 따라 안의 내용 바꿔줄거임~
    const [mode,setMode]=useState("DELETE");
    const [featpostss,setfeatposts]=useRecoilState(featposts);


    const headers=useRecoilValue(header);

    const nav=useNavigate();

    

    if(mode==="DELETE"){
        content=<div className={styles.container}>
            <div className={styles.text}>
                게시글을 <br/>삭제하시겠습니까?
            </div>
            <div>
                <Button title="삭제" btn={styles.btn1} onClick={(e)=>{
                    e.preventDefault();
                    console.log('삭제하겠음?',postid)
                    //삭제코드
                    
                        //DELETE요청
                    axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${postid}`,{headers})
                        .then(res=>{
                            console.log(res);
                            setMode("DELETEdone");
                            // setfeatposts(featpostss+1);
                        })
                        .catch(err=>{
                            console.log(err);
                        });
                    
                }}/>
                <Button type="button" title="취소" btn={styles.btn2} onClick={(e)=>{
                    
                    show(false);
                }}/>
            </div>
        </div>
    }else if(mode==="DELETEdone"){
        content=<div className={styles.container}>
        <div className={styles.text}>
            삭제가 완료되었습니다.
        </div>
        <div>
            <Button title="확인" btn={styles.deletedonebtn} onClick={(e)=>{
                show(false);
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

export default DeleteModal;