
//import 컴포넌트
import styles from "./index.module.css";
import HelloText from "../../components/HelloText";
import Post from "../../components/Post";

//react 라이브러리
import {useNavigate, useLocation,usecallback} from "react-router-dom";
import { useCallback, useEffect,useState } from "react";

//상태관리 라이브러리
import { deletePostId } from "../../atom";
import { useRecoilValue } from "recoil";

import axios from "axios";

const authToken = localStorage.getItem("jwtToken");
// console.log(authToken)

const headers = {
    "X-AUTH-TOKEN": authToken,
};

const Home=({showmodal})=>{

    const nav=useNavigate();

    const deletepostid=useRecoilValue(deletePostId);
    const [data,setData]=useState([]);
    



    //postlist 받아오기
    useEffect(()=>{
        axios.get(`/posts?familyId=1`,{headers})
           .then(res=>{
            console.log(res.data.result);
            setData(res.data.result);
            })
           .catch(err=>console.log(err));

        axios.get(`/familes/1/created`,{headers})
           .then(res=>{
            console.log(res.data.result);
            })
           .catch(err=>console.log(err));
    },[]);


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