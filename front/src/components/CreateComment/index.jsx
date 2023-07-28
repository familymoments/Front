import styles from "./index.module.css";

import TextareaAutosize from "react-textarea-autosize";
import {useState} from "react";

const CreateComment = (props)=>{
    const [content,setContent]=useState();

    const handleContent=(e)=>{
        setContent(
            e.target.value,
            );
    }

    return (
        <form method="" className={styles.wrapper} onSubmit={(e)=>{
            e.preventDefault();
            props.onSubmit(e.target.value)
        }}>
            <TextareaAutosize className={styles.textarea} placeholder="댓글 작성" value={content} onChange={handleContent} />
            <button className={styles.btn} type="submit">작성</button>
        </form>
    )

};

export default CreateComment;