import styles from "./index.module.css";
import selectIcon from "../../assets/btn_select_photo.png";
import CreatePostText from "../../components/CreatePostText";
import SelectImg from "../../components/SelectImg";

import { useState } from "react";
import { useLocation } from "react-router-dom";

const UpdatePost =(props)=>{

    const {state:{post}}=useLocation();

    return(
        <div className={styles.wrapper}>
            
            <div className={styles.title}>글 업로드</div>
            <div className={styles.imgbox}>
                {post.imgs.map((img)=>(
                    <img className={styles.imgSize} src={img}></img>
                ))}
                

            </div>
            
            {/* <SelectImg></SelectImg> */}
            
   
            <div className={styles.subtitle}>글 작성</div>
           

            <CreatePostText content={post.content} btntitle="수정하기"></CreatePostText>
                
            
        </div>
     )

};

export default UpdatePost;