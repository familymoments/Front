import { useState } from "react";
import styles from "./index.module.css";
import Button from "../Button";

const Modal  = ({showmodal,_mode})=>{
    let content=null;
    // mode 에 따라 안의 내용 바꿔줄거임~
    const [mode,setMode]=useState("DELETE");

    if(mode==="DELETE"){
        content=<div className={styles.container}>
            <div className={styles.text}>
                게시글을 <br/>삭제하시겠습니까?
            </div>
            <div>
                <Button title="삭제" btn={styles.btn1} onClick={()=>{
                    console.log("삭제");
                    //삭제코드
                    
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