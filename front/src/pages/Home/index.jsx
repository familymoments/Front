
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

const authToken = localStorage.getItem("jwtToken");
// console.log(authToken)

const headers = {
    "X-AUTH-TOKEN": authToken,
};

const Home=({showmodal})=>{

    const nav=useNavigate();

    const deletepostid=useRecoilValue(deletePostId);
    const [familyInfo,setfamilyInfo]=useState([]);

    const [data,setData]=useRecoilState(recentPosts);
    
    

    /*
    [{    
        postId : 123456,
        writer : "융맘",
        profileImg : "",
        content : "이번에 애들과 함께한 여행~~",
        imgs : ["https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjlfMTI0%2FMDAxNjYxNzYzMTE4MzQw.BDE2sMPhX7xYVad_eo6IL4EjuxUjojQgNHc70XWvbR8g.m9Z4ZYEmP6R2NZYUwTft9-nAuaR4-D6z9Clga7VthxUg.JPEG.poomgoango%2F%25C0%25BB%25BF%25D5%25B8%25AE.jpg&type=a340","https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MDdfMTE3%2FMDAxNjU3MTc3MzE2Nzgz.leQda73NGeUkGP03s8fJBwhcpSRIJSLA7UoIuhTS5jsg.aMeYugUXQeirdpOOYbVHQhR3mtu9SMoWs8vz24pjaLAg.JPEG.love_wlgo%2F20190622%25A3%25DF144713.jpg&type=sc960_832"],
        createdAt : "2023-03-25",
        loved : false
        },{    
            postId : 123,
            writer : "융파",
            profileImg : "",
            content : "오랜만에 아이들과 함께 본 노을",
            imgs : ["https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MDdfMTE3%2FMDAxNjU3MTc3MzE2Nzgz.leQda73NGeUkGP03s8fJBwhcpSRIJSLA7UoIuhTS5jsg.aMeYugUXQeirdpOOYbVHQhR3mtu9SMoWs8vz24pjaLAg.JPEG.love_wlgo%2F20190622%25A3%25DF144713.jpg&type=sc960_832","https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjlfMTI0%2FMDAxNjYxNzYzMTE4MzQw.BDE2sMPhX7xYVad_eo6IL4EjuxUjojQgNHc70XWvbR8g.m9Z4ZYEmP6R2NZYUwTft9-nAuaR4-D6z9Clga7VthxUg.JPEG.poomgoango%2F%25C0%25BB%25BF%25D5%25B8%25AE.jpg&type=a340"],
            createdAt : "2023-03-27",
            loved : true
            },
    ]
    */
    



    //postlist 받아오기
    useEffect(()=>{
        //최근 10개 게시물 서버에서 받아오기
        // axios.get(`/posts?familyId=1`,{headers})
        //    .then(res=>{
        //     console.log(res.data.result);
        //     setData(res.data.result);
        //     })
        //    .catch(err=>console.log(err));

        axios.get(`/families/1/created`,{headers:{
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
        // axios.delete(`/posts/${deletepostid}`,{headers})
        // .then(res=>{
        //     setData(data.filter((post)=> deletepostid !==post.postId));
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
        setData(data.filter((post)=> deletepostid !==post.postId));
       
    },[deletepostid])




    

    return(
        <div className={styles.wrapper}>
            <HelloText user={familyInfo.nickname} Dday={familyInfo.dday} />
            <Post showmodal={showmodal} postlist={data}/>
        </div>)
}

export default Home;