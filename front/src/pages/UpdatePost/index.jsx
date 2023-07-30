import styles from "./index.module.css";
import selectIcon from "../../assets/btn_select_photo.png";
import CreatePostText from "../../components/CreatePostText";
import SelectImg from "../../components/SelectImg";
import Button from "../../components/Button";
import { useState } from "react";

const UpdatePost =(props)=>{


    return(
        <div className={styles.wrapper}>
            
            <div className={styles.title}>글 업로드</div>
            <SelectImg></SelectImg>
            
   
            <div className={styles.subtitle}>글 작성</div>
            <CreatePostText content="오늘 잼썼당"></CreatePostText>

            <Button title="수정 완료" btn={styles.btn}></Button>
        </div>
     )

};

export default UpdatePost;