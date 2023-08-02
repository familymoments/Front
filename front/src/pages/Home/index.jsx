
//import 컴포넌트
import styles from "./index.module.css";
import HelloText from "../../components/HelloText";
import Post from "../../components/Post";

//react 라이브러리
import {useNavigate, useLocation} from "react-router-dom";
import { useEffect,useState } from "react";

//상태관리 라이브러리
import { deletePostId } from "../../atom";
import { useRecoilValue } from "recoil";

import axios from "axios";

const Home=({showmodal})=>{

    const nav=useNavigate();

    const deletepostid=useRecoilValue(deletePostId);

    //postlist 받아오기
    // const getposts=()=>{

    // }

    const [data,setData]=useState([{    
        postId : 123456,
        writer : "딸내미",
        profileImg : "",
        content : "엄마아빠랑 간곳 !!",
        imgs : ["https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjlfMTI0%2FMDAxNjYxNzYzMTE4MzQw.BDE2sMPhX7xYVad_eo6IL4EjuxUjojQgNHc70XWvbR8g.m9Z4ZYEmP6R2NZYUwTft9-nAuaR4-D6z9Clga7VthxUg.JPEG.poomgoango%2F%25C0%25BB%25BF%25D5%25B8%25AE.jpg&type=a340","https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MDdfMTE3%2FMDAxNjU3MTc3MzE2Nzgz.leQda73NGeUkGP03s8fJBwhcpSRIJSLA7UoIuhTS5jsg.aMeYugUXQeirdpOOYbVHQhR3mtu9SMoWs8vz24pjaLAg.JPEG.love_wlgo%2F20190622%25A3%25DF144713.jpg&type=sc960_832"],
        createdAt : "2023-03-25",
        loved : false
        },{    
            postId : 123,
            writer : "아들내미",
            profileImg : "",
            content : "엄마아빠랑 갈곳 !!",
            imgs : ["https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MDdfMTE3%2FMDAxNjU3MTc3MzE2Nzgz.leQda73NGeUkGP03s8fJBwhcpSRIJSLA7UoIuhTS5jsg.aMeYugUXQeirdpOOYbVHQhR3mtu9SMoWs8vz24pjaLAg.JPEG.love_wlgo%2F20190622%25A3%25DF144713.jpg&type=sc960_832","https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjlfMTI0%2FMDAxNjYxNzYzMTE4MzQw.BDE2sMPhX7xYVad_eo6IL4EjuxUjojQgNHc70XWvbR8g.m9Z4ZYEmP6R2NZYUwTft9-nAuaR4-D6z9Clga7VthxUg.JPEG.poomgoango%2F%25C0%25BB%25BF%25D5%25B8%25AE.jpg&type=a340"],
            createdAt : "2023-03-27",
            loved : true
            },
    ]);

    const DeletePost=(postid)=>{
        setData(data.filter((post)=> postid !==post.postId));
    }

    useEffect(()=>{
        setData(data.filter((post)=> deletepostid !==post.postId));
    },[deletepostid])




    

    return(
        <div className={styles.wrapper}>
            <HelloText user="딸내미" Dday="2" />
            <Post showmodal={showmodal} postlist={data}/>
        </div>)
}

export default Home;