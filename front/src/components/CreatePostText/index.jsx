/**게시글작성 컴포넌트입니다 */

import styles from "./CreatePostText.module.css";
import { useState } from "react";

const CreatePostText =(props)=>{

    const [content,setContent]=useState("");

    

    return (
    <div className={styles.textBox}>
        <form onSubmit={e=>{
            e.preventDefault();

        }}>
        <textarea className={styles.textcontent} name="postText" value={props.content||content} placeholder="| 사진과 어울리는 내용을 작성하세요." onChange={e=>{
            setContent(e.target.value);
            
        }}></textarea>
        </form>
       
    </div>)

};

export default CreatePostText;