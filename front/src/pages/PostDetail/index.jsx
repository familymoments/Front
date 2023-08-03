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
import { useState } from "react";

import axios from "axios";




const PostDetail=({showmodal})=>{

    const {state:{post}} = useLocation();
    console.log("post",post);

    //post 정보 navigation에서 state로 받아오기
    const postData=post;
    
    

    const commentData=[
        {
			commentId : 1,
			nickname : "딸내미",
			profileImg : "",
			content : "담에 또가장",
			heart : false,
            updatedAt : "22-03-04"
		},
		{
			commentId : 2,
			nickname : "마미",
			profileImg : "",
			content : "딸~~ 재밌었으~~",
			heart : true,
            updatedAt : "22-03-04"
		}
    ]
    
    
    const [heart,setHeart]=useState(postData.loved);
    const postId=useParams().postId;
    console.log(postId);
    
    const pushHeart=(id)=>{
        console.log(id+"하트누름");
        heart ? setHeart(false):setHeart(true);
    }
    const userId=1;
    const submitComment=(content)=>{
        console.log(content);
        axios.post(`/api/comments/${userId}?postId=5`,{
            "content":content,
        })
        .then(res=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    return(
        <div className={styles.wrapper}>
            <PostUserHeader isnormal={false} userimg={postData.profileImg} username={postData.writer} postdate={postData.createdAt}></PostUserHeader>
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
                    
                    <PostContent showmodal={showmodal} postlist={post} postId={postId} postcontent={postData.content} postheart={heart} 
                        pushHeart={()=>{
                        pushHeart(postId);}} 
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
                                pushHeart();
                            }}></ShowComment>
                        ))}
                    </div>
                </div>
            </div>
                
        </div>
        
    )
};

export default PostDetail;