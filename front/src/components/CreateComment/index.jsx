import styles from "./index.module.css";

import TextareaAutosize from "react-textarea-autosize";
import {useState} from "react";
import { useParams } from "react-router-dom";

const CreateComment = (props)=>{
    const [content,setContent]=useState();
    const postid=useParams().postId;

    const handleContent=(e)=>{
        setContent(
            e.target.value,
            );
    }

    return (
        <form  className={styles.wrapper} onSubmit={(e)=>{
            // e.preventDefault();
            props.onSubmit(content);
        }}>
            <TextareaAutosize className={styles.textarea} placeholder="댓글 작성" value={content} onChange={handleContent} />
            <button className={styles.btn} type="submit">작성</button>
        </form>
    )

};

export default CreateComment;