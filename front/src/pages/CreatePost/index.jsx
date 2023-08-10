/**새 글 업로드하는 컴포넌트 */
import styles from "./CreatePost.module.css";
import selectIcon from "../../assets/btn_select_photo.png";
import CreatePostText from "../../components/CreatePostText";
import SelectImg from "../../components/SelectImg";
import Button from "../../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";


//상태관리 라이브러리
import { nextPostid,recentPosts,token } from "../../atom";
import { useRecoilValue, useRecoilState } from "recoil";

const CreatePost = ()=>{
    const authtoken = useRecoilValue(token);

    const headers = {
        "X-AUTH-TOKEN" : authtoken,
        "Content-Type" : "multipart/form-data",
    
        
    };

    //날짜정보 받아오기 (서버 연동되면 필요x)
    const [date,setDate]=useState(new Date());
    let year=date.getFullYear();
    let month=date.getMonth()+1;
    let day=date.getDate();
    const [nextpostid,setNextpostid]=useRecoilState(nextPostid);
    const [data,setData] = useRecoilState(recentPosts);

    const nav=useNavigate();


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

        console.log(imgs[0]);
        // Post실행
        const fd = new FormData();
        fd.append("postInfo" , new Blob([JSON.stringify(postinfo)], { type: 'application/json' }));
        fd.append("img1",imgs[0]);

        await axios.post(`/posts?familyId=8`,fd,{headers})
        .then(res=>{
            console.log(res);
        setDate(data.concat(res.data));
        })
        .catch(err=>{
            console.log(err);
        })

        //더미데이터로 추가하기
        // const newPost={
        //     postId : nextpostid,
        //     writer : "융입니다",
        //     profileImg : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131216_2%2Fxtjbx42795_1387160042980nSXHw_JPEG%2F2012-02-14_22%253B19%253B59.jpg&type=a340",
        //     content : content,
        //     imgs : imgs,
        //     createdAt : `${year}년 ${month}월 ${day}일`,
        //     loved : false
        // }

        // const newposts=[newPost,...data];
        // setData(newposts);
        // console.log(data);
        // setNextpostid(nextPostid+1);
        

        // state값 전달하며 페이지 이동
         nav("/Main/postlist");
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