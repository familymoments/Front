import styles from "./index.module.css";
import selectIcon from "../../assets/btn_select_photo.png";
import CreatePostText from "../../components/CreatePostText";
import SelectImg from "../../components/SelectImg";

import { useState } from "react";

const UpdatePost =(props)=>{


    return(
        <div className={styles.wrapper}>
            
            <div className={styles.title}>글 업로드</div>
            <div className={styles.imgbox}>
                <img className={styles.imgSize} src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjlfMTI0%2FMDAxNjYxNzYzMTE4MzQw.BDE2sMPhX7xYVad_eo6IL4EjuxUjojQgNHc70XWvbR8g.m9Z4ZYEmP6R2NZYUwTft9-nAuaR4-D6z9Clga7VthxUg.JPEG.poomgoango%2F%25C0%25BB%25BF%25D5%25B8%25AE.jpg&type=a340"></img>

            </div>
            
            {/* <SelectImg></SelectImg> */}
            
   
            <div className={styles.subtitle}>글 작성</div>
           

            <CreatePostText content="오늘 잼썼당" btntitle="수정하기"></CreatePostText>
                
            
        </div>
     )

};

export default UpdatePost;