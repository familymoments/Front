
//import 컴포넌트
import styles from "./index.module.css";
import HelloText from "../../components/HelloText";
import Post from "../../components/Post";
import CreateFamily5 from "../Family/CreateFamily5";

//react 라이브러리
import {useNavigate, useLocation,usecallback} from "react-router-dom";
import { useCallback, useEffect,useState } from "react";

//상태관리 라이브러리
import { deletePostId, recentPosts,token,header } from "../../atom";
import { useRecoilValue, useRecoilState } from "recoil";

import {postdata} from "../../state/post";

import axios from "axios";




const Home=({showmodal})=>{
    // const header = useRecoilValue(headers);
    // console.log(header);
    const authToken=useRecoilValue(token);


    const headers = useRecoilValue(header);
    //postdata
    const [postData,setPostData]=useRecoilState(postdata);

    const nav=useNavigate();

    const deletepostid=useRecoilValue(deletePostId);
    const [familyInfo,setfamilyInfo]=useState([]);

    //const [data,setData]=useRecoilState(recentPosts);
    const [isnot,setIsnot]=useState(false);



    //postlist 받아오기
    useEffect( ()=>{
        //최근 10개 게시물 서버에서 받아오기
        axios.get(`${process.env.REACT_APP_SERVER_URL}/posts?familyId=5`,{headers})
           .then(res=>{
            if(res.data.code===404){
                setIsnot(true);
            }else {
                setPostData(res.data.result);
            }
            })
           .catch(err=>console.log(err));
        axios.get(`${process.env.REACT_APP_SERVER_URL}/families/5/created`,{headers:{
            ...headers,
            "Path":"/",
            "Secure" : "HttpOnly",
        }})
           .then(res=>{
            setfamilyInfo(res.data.result);
            
            })
           .catch();

        
    },[]);

    useEffect(()=>{
        //DELETE요청
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${deletepostid}`,{headers})
        .then(res=>{
            //setPostData(postData.filter((post)=> deletepostid !==post.postId));
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
        // setData(data.filter((post)=> deletepostid !==post.postId));
       
    },[deletepostid])




    

    return(
        <div className={styles.wrapper}>
            <HelloText user={familyInfo.nickname} Dday={familyInfo.dday} />
            {console.log(postData)}
            {postData.map((post)=>(
                <Post showmodal={showmodal} it={post}/>
            ))}
            {/* <Post showmodal={showmodal} postlist={post}/> */}
            {(isnot)?<CreateFamily5/>:""}
        </div>)
}

export default Home;