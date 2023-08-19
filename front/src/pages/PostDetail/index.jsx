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
import {token,userImg} from "../../atom";
import { useRecoilState,useRecoilValue } from "recoil";





const PostDetail=({showmodal})=>{
    //헤더에 토큰추가
    const authToken = useRecoilValue(token);
    const headers = {
        "X-AUTH-TOKEN": authToken,
    };

    //현재 게시물 상세조회
   
    const postId=useParams().postId;
    const [postuserImg,setpostuserImg]=useRecoilState(userImg);
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
        axios.get(`/posts/${postId}`,{headers})
        .then(res=>{
            setPostData(res.data.result);
            setpostuserImg(res.data.result.profileImg);
        })
        .catch()
    },[]);

    
    

    const commentData=[
        {
			commentId : 1,
			nickname : "융입니다",
			profileImg : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131216_2%2Fxtjbx42795_1387160042980nSXHw_JPEG%2F2012-02-14_22%253B19%253B59.jpg&type=a340",
			content : "담에 또가요!!",
			heart : false,
            updatedAt : "1시간 전"
		}
    ]
    
    
    
    // const pushHeart=(id)=>{
    //     console.log(id+"하트누름");
    //     heart ? setHeart(false):setHeart(true);
    // }
    const userId=1;
    const submitComment=(content)=>{
        console.log(content);
        //post
    }

    return(
        <div className={styles.wrapper}>
           <PostUserHeader isnormal={false} userimg={postuserImg} username={postData.writer} postdate={postData.createdAt}></PostUserHeader>
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
                    
                    <PostContent showmodal={showmodal} postlist={postData} postcontent={postData.content} postheart={postData.loved} postId={postId}
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