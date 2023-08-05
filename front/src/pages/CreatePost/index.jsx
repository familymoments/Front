/**새 글 업로드하는 컴포넌트 */
import styles from "./CreatePost.module.css";
import selectIcon from "../../assets/btn_select_photo.png";
import CreatePostText from "../../components/CreatePostText";
import SelectImg from "../../components/SelectImg";
import Button from "../../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const authToken = localStorage.getItem("jwtToken");
// console.log(authToken)

const headers = {
    "X-AUTH-TOKEN": authToken,
};


const CreatePost = ()=>{

    const nav=useNavigate();

    // const [state,setState]=useState({
    //     content:"",
    //     imgs:[],
    // });

    const [imgs,setImgs]=useState([]);
    const [content,setContent]=useState("");
    const [img1,setImg1]=useState();
    const [img2,setImg2]=useState();
    const [img3,setImg3]=useState();
    const [img4,setImg4]=useState();

//  state값이 바뀔 때마다 state값 변경해주기
    const handleChangeState=(e)=>{
        setImgs(e);
    };

    const postinfo ={
        "content":content
    }
    // submit 버튼 눌렀을 때 실행되는 함수
    const handleSubmit= async(e)=>{
        const fd = new FormData();
        fd.append("postInfo" , new Blob([JSON.stringify(postinfo)], {type: "application/json"}));
        fd.append("img1",imgs[0]);

        
        // Post실행
        await axios.post(`/posts?familyId=1`,fd,{headers})
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
        
        console.log(imgs[0],content);
        // state값 전달하며 페이지 이동
        // nav("/Main/postlist");
        setImgs([]);
    }


    
     return(
        <div className={styles.wrapper}>
            
            <div className={styles.title}>새 글 업로드</div>
            <SelectImg handleChangeState={handleChangeState}></SelectImg>
   
            <div className={styles.subtitle}>글 작성</div>
            <CreatePostText handleSubmit={handleSubmit} setContent={setContent} btntitle="순간을 가족에게 공유하기"></CreatePostText>

        </div>
     )
};


export default CreatePost;

