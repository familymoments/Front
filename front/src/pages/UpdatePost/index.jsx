import styles from "./index.module.css";
import selectIcon from "../../assets/btn_select_photo.png";
import CreatePostText from "../../components/CreatePostText";
import SelectImg from "../../components/SelectImg";

import { useEffect, useState } from "react";
import { useLocation,useNavigate, useParams } from "react-router-dom";

//상태관리 라이브러리
import { recentPosts,postid ,header} from "../../atom";
import { preupdate } from "../../state/post";
import { useRecoilValue, useRecoilState } from "recoil";

import axios from "axios";

const UpdatePost =()=>{
    //헤더추가
    const headers = useRecoilValue(header);

    const nav=useNavigate();
    // const {state:{post}}=useLocation();

    //업데이트 전 상태값(이미지, 내용)
    const preup=useRecoilValue(preupdate);


    const [content_,setContent]=useState(preup.content);

    const postid=useParams().postId;



    


    const handleSubmit= async(e)=>{
        const postinfo={
            "content":content_
        }
        console.log(postid);
        
        // Patch실행
        const fd = new FormData();
        fd.append("postInfo" , new Blob([JSON.stringify(postinfo)], { type: 'application/json' }));
        preup.imgs.map((img,idx)=>(
            fd.append(`img${idx+1}`,img)
        ))
        console.log(postinfo);
        await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts/${postid}/edit`,fd,{
            ...headers,
            "Content-Type" : "multipart/form-data"
            })
        .then(res=>{
            console.log("수정",res);
        })
        .catch(err=>{
            console.log("수정",err);
        })

        //더미데이터로 추가하기
        // const newPost={
        //     postId : post.postId,
        //     writer : "융입니다",
        //     profileImg : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131216_2%2Fxtjbx42795_1387160042980nSXHw_JPEG%2F2012-02-14_22%253B19%253B59.jpg&type=a340",
        //     content : content,
        //     imgs : post.imgs,
        //     createdAt : post.createdAt,
        //     loved : post.loved
        // }
        // let newposts=[...data];
        // newposts[idx]=newPost;
        // setData(newposts);

        
        

        // state값 전달하며 페이지 이동
         nav("/Main/postlist");

    }

    return(
        <div className={styles.wrapper}>
            
            <div className={styles.title}>글 업로드</div>
            <div className={styles.imgbox}>
                {preup.imgs.map((img)=>(
                    <img className={styles.imgSize} src={img}></img>
                ))}
                

            </div>
        
            
   
            <div className={styles.subtitle}>글 작성</div>
           

            <CreatePostText setContent={setContent} handleSubmit={handleSubmit} content={preup.content} btntitle="수정하기"></CreatePostText>
                
            
        </div>
     )

};

export default UpdatePost;