
//import 컴포넌트
import styles from "./index.module.css";
import HelloText from "../../components/HelloText";
import Post from "../../components/Post";

//react 라이브러리
import {useNavigate, useLocation,usecallback} from "react-router-dom";
import { useCallback, useEffect,useState } from "react";

//상태관리 라이브러리
import { deletePostId, recentPosts } from "../../atom";
import { useRecoilValue, useRecoilState } from "recoil";

import axios from "axios";

const authToken="";
// console.log(authToken)

const headers = {
    "X-AUTH-TOKEN": authToken,
};

const Home=({showmodal})=>{

    const nav=useNavigate();

    const deletepostid=useRecoilValue(deletePostId);
    const [familyInfo,setfamilyInfo]=useState([]);

    const [data,setData]=useRecoilState(recentPosts);
    

    



    //postlist 받아오기
    useEffect(()=>{
        //최근 10개 게시물 서버에서 받아오기
        axios.get(`http://43.202.90.230/posts?familyId=5`,{headers})
           .then(res=>{
            console.log(res.data.result);
            setData(res.data.result);
            })
           .catch(err=>console.log(err));

        axios.get(`http://43.202.90.230/families/5/created`,{headers:{
            "X-AUTH-TOKEN": authToken,
            "Path":"/",
            "Secure" : "HttpOnly",
        }})
           .then(res=>{
            console.log(res.data.result);
            setfamilyInfo(res.data.result);
            })
           .catch(err=>console.log(err));

        
    },[]);


    useEffect(()=>{
        //DELETE요청
        axios.delete(`http://43.202.90.230/posts/${deletepostid}`,{headers})
        .then(res=>{
            setData(data.filter((post)=> deletepostid !==post.postId));
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
        //setData(data.filter((post)=> deletepostid !==post.postId));
       
    },[deletepostid])




    

    return(
        <div className={styles.wrapper}>
            <HelloText user={familyInfo.nickname} Dday={familyInfo.dday} />
            <Post showmodal={showmodal} postlist={data}/>
        </div>)
}

export default Home;