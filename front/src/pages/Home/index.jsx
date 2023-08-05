
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

const Home=({showmodal})=>{

    const nav=useNavigate();

    const deletepostid=useRecoilValue(deletePostId);
    const [data,setData]=useState([]);
    
    // axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;


    //postlist 받아오기
    useEffect(()=>{
        axios.get(`/posts?familyId=1`,{
            headers:{
                "X-AUTH-TOKEN" : "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwMWVlMzMwNC1jN2I2LTFkZDQtYTJlYi02NTczNjU3ZDdjYWIiLCJpYXQiOjE2OTExNDUwNjAsImV4cCI6MTY5MTc0OTg2MH0.lHW1Hia_83PKSKaw-Kp1Tw03Sqozsm19HdArafP_3Sk"
            }
           })
           .then(res=>{
            console.log(res.data.result);
            setData(res.data.result);
            })
           .catch(err=>console.log(err));

        axios.get(`/familes/1/created`,{
            headers:{
                "X-AUTH-TOKEN" : "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwMWVlMzMwNC1jN2I2LTFkZDQtYTJlYi02NTczNjU3ZDdjYWIiLCJpYXQiOjE2OTExNDUwNjAsImV4cCI6MTY5MTc0OTg2MH0.lHW1Hia_83PKSKaw-Kp1Tw03Sqozsm19HdArafP_3Sk"
            }
           })
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