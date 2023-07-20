/**새 글 업로드하는 컴포넌트 */
import styles from "./CreatePost.module.css";
import selectIcon from "../../assets/btn_select_photo.png";
import CreatePostText from "../../components/CreatePostText";
import SelectImg from "../../components/SelectImg";
import Button from "../../components/Button";
import { useState } from "react";


const CreatePost = ()=>{
    
     return(
        <div className={styles.wrapper}>
            
            <div className={styles.title}>새 글 업로드</div>
            <SelectImg></SelectImg>
            
   
            <div className={styles.subtitle}>글 작성</div>
            <CreatePostText ></CreatePostText>

            <Button title="순간을 가족에게 공유하기" btn={styles.btn}></Button>
        </div>
     )
};


export default CreatePost;

