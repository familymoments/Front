/**게시글작성 컴포넌트입니다 */

import styles from "./CreatePostText.module.css";
import { useState,useRef } from "react";

import Button from "../Button";

const CreatePostText =(props)=>{

    const [content,setContent]=useState(props.content);


    const updateHandler=(e)=>{
        e.preventDefault();
        console.log(e.target.postText.value);
        
    }
    

    return (
        <form className={styles.textBox} onSubmit={updateHandler}>
            <textarea className={styles.textcontent} name="postText" value={content} placeholder="| 사진과 어울리는 내용을 작성하세요." onChange={e=>{
            setContent(e.target.value);
            
            }}></textarea>

            <Button type="submit" title={props.btntitle} btn={styles.btn} 
        ></Button>
    </form>)
       

};

export default CreatePostText;