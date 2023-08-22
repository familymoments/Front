import PostUserHeader from "../../components/PostUserHeader";
import PostContent from "../../components/PostContent";
import CreateComment from "../../components/CreateComment";
import ShowComment from "../../components/ShowComment";

import styles from "./index.module.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { useParams,useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

//상태관리
import {token,userImg,header} from "../../atom";
import { useRecoilState,useRecoilValue } from "recoil";





const PostDetail=()=>{
    //헤더에 토큰추가
    const headers = useRecoilValue(header);

    //현재 게시물 상세조회
   
    const postId=useParams().postId;
    // console.log("post",postId);

    //post 정보 navigation에서 state로 받아오기
    const [postData,setPostData]=useState( {
        "postId" : undefined,
        "writer" : "",
        "profileImg" : "",
        "content" : "",
        "imgs" :[],
        "createdAt" : "",
        "countLove" : undefined,
        "loved" : null
    });

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_SERVER_URL}/posts/${postId}`,{headers})
        .then(res=>{
            setPostData(res.data.result);
            console.log(res.data.result);
        })
        .catch()
    },[]);

    
    

    const [commentData,setCommentData]=useState([]);

    
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_SERVER_URL}/comments?postId=${postId}`,{headers})
        .then(res=>{
            console.log(res.data);
            if(res.data.code!==404){
                setCommentData(res.data.result);
            }
            // if(res.data.code===461){
            //     axios.post(`${process.env.REACT_APP_SERVER_URL}/users/auth/reissue`)
            // }
            

        })
    },[])
    
    

   
    
    const submitComment= async (content_)=>{
        console.log(content_);
        const fd = new FormData()
    
        const postCommentReq = {
            content:content_
          }
          
          const blob = new Blob([JSON.stringify(postCommentReq)], {type: "application/json"}) 
          
          fd.append("postCommentReq",blob);
          console.log(fd);

        //post
        await axios.post(`${process.env.REACT_APP_SERVER_URL}/comments?postId=${postId}`,fd,{headers})
        .then(
            res=>console.log(res)
        )
        .catch(err=>console.log(err))
    }

    return(
        <div className={styles.wrapper}>
           <PostUserHeader isnormal={false} userImg={postData.profileImg} username={postData.writer} postdate={postData.createdAt}></PostUserHeader>
            <div className={styles.line}></div>

            <div className={styles.postContent}>
                    <div className={styles.postimg}>
                        <Swiper className={styles.swiper}
                            // install Swiper modules
                            modules={[Pagination]}
                            spaceBetween={0}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={(e) => console.log('swipe')}
                            style={{
                                "--swiper-pagination-color": "#9378FF",
                                "--swiper-pagination-bullet-inactive-color": "#FFF",
                                "--swiper-pagination-bullet-inactive-opacity": "1",
                              }}
                            
                            >
                                {postData.imgs.map((photo,idx) => {
                                    return (
                                        <SwiperSlide key={idx}>
                                    <div className={styles.swiperimg}>
                                        <img className={styles.img} src={photo}/></div></SwiperSlide>
                                    )
                                    })}
                        </Swiper>
                    </div>
                    
                    <PostContent postlist={postData} postcontent={postData.content} postheart={postData.loved} postId={postId}
                        pushHeart={()=>{
                        //pushHeart(postId);
                    }} 
                    ></PostContent>
                    <div className={styles.commentline}></div>


                    {/* 댓글 부분 */} 
                    <div className={styles.commentSection}>
                        <div className={styles.commentHeader}>
                            <span>댓글 {commentData.length}개</span>
                            <span>하트 보기</span>
                        </div>
                    
                    <CreateComment onSubmit={submitComment}></CreateComment>
                    <div className={styles.showComments}>
                        {commentData.map((comment)=>(
                            <ShowComment commentinfo={comment} heart={comment.heart} pushHeart={()=>{
                                //pushHeart();
                            }}></ShowComment>
                        ))}
                    </div>
                </div>
            </div>
                
        </div>
        
    )
};

export default PostDetail;