/**게시글작성 컴포넌트입니다 */

import styles from "./CreatePostText.module.css";
import { useState } from "react";

const CreatePostText =()=>{

    const [content,setContent]=useState("");
    const [contentLen,setContentLen]=useState(0);

    

    return (
    <div className={styles.textBox}>
        <form onSubmit={e=>{
            e.preventDefault();

        }}>
        <textarea className={styles.textcontent} name="postText" value={content} placeholder="| 사진과 어울리는 내용을 작성하세요." onChange={e=>{
            setContent(e.target.value);
            if(e.target.value.length>50){
                alert("글자 수를 초과했습니다.");
            }else setContentLen(e.target.value.length);
        }}></textarea>
        </form>
        <span>{contentLen}/50</span>
    </div>)

};

export default CreatePostText;