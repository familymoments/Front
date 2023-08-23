
//import 컴포넌트
import styles from "./index.module.css";
import HelloText from "../../components/HelloText";
import Post from "../../components/Post";
import CreateFamily5 from "../Family/CreateFamily5";

//react 라이브러리
import {useNavigate, useLocation,usecallback} from "react-router-dom";
import { useCallback, useEffect,useState } from "react";

//상태관리 라이브러리
import { header } from "../../atom";
import { useRecoilValue, useRecoilState } from "recoil";

import {postdata,featposts} from "../../state/post";

import axios from "axios";




const Home=({showmodal})=>{
    // const header = useRecoilValue(headers);
    // console.log(header);

    const familyid=localStorage.getItem("familyID");



    const headers = useRecoilValue(header);
    //postdata
    const [postData,setPostData]=useRecoilState(postdata);

    const nav=useNavigate();

    const [familyInfo,setfamilyInfo]=useState([]);

    const [isnot,setIsnot]=useState(false);

    //게시글리스트에 수정이 있는지
    const featpostss=useRecoilValue(featposts);



    //postlist 받아오기
    useEffect( ()=>{
        //최근 10개 게시물 서버에서 받아오기
        axios.get(`${process.env.REACT_APP_SERVER_URL}/posts?familyId=${familyid}`,{headers})
           .then(res=>{
            if(res.data.code===404){
                setIsnot(true);
            }else {
                setPostData(res.data.result);
            }
            })
           .catch(err=>console.log(err));
        axios.get(`${process.env.REACT_APP_SERVER_URL}/families/${familyid}/created`,{headers:{
            ...headers,
            "Path":"/",
            "Secure" : "HttpOnly",
        }})
           .then(res=>{
            setfamilyInfo(res.data.result);
            
            })                                  
           .catch();

        

        
    },[featpostss]);



    //  console.log(postData[postData.length-1]);
    // if(postData.length%10===0){//개수가 10,20,30...이면
    //     const smallistpost=postData[postData.length-1];
    //     axios.get(`${process.env.REACT_APP_SERVER_URL}/posts?familyId=${familyid}&postId=${smallistpost.postId}`,{headers})
    //     .then(res=>{
    //         // console.log(res.data.result);
    //         setPostData(postData.concat([...res.data.result]));
    //     })
    // }
    




    

    return(
        <div className={styles.wrapper}>
            <HelloText user={familyInfo.nickname} Dday={familyInfo.dday} />
            {console.log(postData)}
            {postData.map((post)=>(
                <Post it={post}/>
            ))}
            {/* <Post showmodal={showmodal} postlist={post}/> */}
            {(isnot)?<CreateFamily5/>:""}
        </div>)
}

export default Home;