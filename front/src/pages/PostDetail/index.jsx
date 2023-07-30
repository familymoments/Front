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
        {src:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjlfMTI0%2FMDAxNjYxNzYzMTE4MzQw.BDE2sMPhX7xYVad_eo6IL4EjuxUjojQgNHc70XWvbR8g.m9Z4ZYEmP6R2NZYUwTft9-nAuaR4-D6z9Clga7VthxUg.JPEG.poomgoango%2F%25C0%25BB%25BF%25D5%25B8%25AE.jpg&type=a340"},
        {src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MDdfMTE3%2FMDAxNjU3MTc3MzE2Nzgz.leQda73NGeUkGP03s8fJBwhcpSRIJSLA7UoIuhTS5jsg.aMeYugUXQeirdpOOYbVHQhR3mtu9SMoWs8vz24pjaLAg.JPEG.love_wlgo%2F20190622%25A3%25DF144713.jpg&type=sc960_832"},];

    
    
    const [heart,setHeart]=useState();
    const postId=useParams();
    
    const pushHeart=(id)=>{
        console.log(id+"하트누름");
        heart ? setHeart(false):setHeart(true);
    }

    const submitComment=(content)=>{
        console.log(content);
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
                            spaceBetween={80}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={(e) => console.log('swipe')}
                            >
                                {photos.map((photo,idx) => {
                                    return (
                                        <SwiperSlide key={idx}>
                                    <div className={styles.swiperimg} >
                                        <img className=""  src={photo.src}/></div></SwiperSlide>
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
                    
                    <CreateComment onSubmit={submitComment}>댓글작성 컴포넌트</CreateComment>
                    <div className={styles.showComments}>
                        <ShowComment heart={heart} pushHeart={()=>{
                            pushHeart();
                        }} createTime="7분전"></ShowComment>
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