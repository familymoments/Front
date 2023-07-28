import PostUserHeader from "../../components/PostUserHeader";
import PostContent from "../../components/PostContent";
import CreateComment from "../../components/CreateComment";
import ShowComment from "../../components/ShowComment";

import styles from "./index.module.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { useParams } from "react-router-dom";
import { useState } from "react";




const PostDetail=()=>{

    const photos=[
        {src:"footer-home.png"},
        {src: "btn_select_photo.png"}];

    
    
    const [heart,setHeart]=useState();
    const postId=useParams();
    
    const pushHeart=(id)=>{
        console.log(id+"하트누름");
        heart ? setHeart(false):setHeart(true);
    }
    return(
        <div className={styles.wrapper}>
            <PostUserHeader isnormal={false} username="딸내미" postdate="2023.04.12(일)"></PostUserHeader>
            <div className={styles.line}></div>

            <div className={styles.postContent}>
                    <div className={styles.postimg}>
                        <Swiper className={styles.swiper}
                            // install Swiper modules
                            modules={[ Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={(e) => console.log('swipe')}
                            >
                                {photos.map((photo,idx) => {
                                    return (
                                        <SwiperSlide key={idx}>
                                    <div className={styles.swiperimg} >
                                        <img className=""  src={require(`../../assets/${photo.src}`)}/></div></SwiperSlide>
                                    )
                                    })}
                        </Swiper>
                    </div>
                    
                    <PostContent postId={postId} postcontent="우리가족사진 삼각대로 찍기~~" postheart={heart} 
                        pushHeart={(e)=>{
                        pushHeart(postId);}} 
                    ></PostContent>
                    <div className={styles.commentline}></div>
                    {/* 댓글 부분 */} 
                    <div className={styles.commentSection}>
                        <div className={styles.commentHeader}>
                            <span>댓글 2개</span>
                            <span>하트 보기</span>
                        </div>
                    
                    <CreateComment onSubmit="">댓글작성 컴포넌트</CreateComment>
                    <div className={styles.showComments}>
                        <ShowComment heart={heart} pushHeart={()=>{
                            pushHeart();
                        }}></ShowComment>
                        <ShowComment heart={heart} pushHeart={()=>{
                            pushHeart();
                        }}></ShowComment>
                    </div>
                </div>
            </div>
                
        </div>
        
    )
};

export default PostDetail;