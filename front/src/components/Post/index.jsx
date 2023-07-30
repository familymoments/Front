/**게시글 하나 컴포넌트입니다 */
import styles from "./index.module.css";
import PostUserHeader from "../PostUserHeader";
import PostContent from "../PostContent";



import { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const  Post =(props)=>{
    const photos=[
        {src:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjlfMTI0%2FMDAxNjYxNzYzMTE4MzQw.BDE2sMPhX7xYVad_eo6IL4EjuxUjojQgNHc70XWvbR8g.m9Z4ZYEmP6R2NZYUwTft9-nAuaR4-D6z9Clga7VthxUg.JPEG.poomgoango%2F%25C0%25BB%25BF%25D5%25B8%25AE.jpg&type=a340"},
        {src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MDdfMTE3%2FMDAxNjU3MTc3MzE2Nzgz.leQda73NGeUkGP03s8fJBwhcpSRIJSLA7UoIuhTS5jsg.aMeYugUXQeirdpOOYbVHQhR3mtu9SMoWs8vz24pjaLAg.JPEG.love_wlgo%2F20190622%25A3%25DF144713.jpg&type=sc960_832"},
        {src:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjlfMTI0%2FMDAxNjYxNzYzMTE4MzQw.BDE2sMPhX7xYVad_eo6IL4EjuxUjojQgNHc70XWvbR8g.m9Z4ZYEmP6R2NZYUwTft9-nAuaR4-D6z9Clga7VthxUg.JPEG.poomgoango%2F%25C0%25BB%25BF%25D5%25B8%25AE.jpg&type=a340"},
        ];

    const [heart,setHeart]=useState();
    const postId=props.postId;
    console.log("postId in Post : "+postId);

    const pushHeart=(id)=>{
        console.log(id+"하트누름");
        heart ? setHeart(false):setHeart(true);
    }

    const nav=useNavigate();


    return (<div className={styles.wrapper}>
        <PostUserHeader userImg="" username="딸내미" postdate="2023.4.10(토)"></PostUserHeader>
        <div className={styles.postContent}>
            <div className={styles.postimg}>
                <Swiper className={styles.swiper}
                    // install Swiper modules
                    modules={[ Pagination]}
                    spaceBetween={120}
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
                    {/* <SwiperSlide>
                        <div className={styles.swiperimg}>
                            <img className=""   src=""/></div></SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide> */}
                </Swiper>
            </div>
            
            <PostContent postId={postId} postcontent="우리가족사진 삼각대로 찍기~~" postheart={heart} 
                pushHeart={(e)=>{
                pushHeart(postId);}} 
            ></PostContent>
        </div>
    </div>)
};

export default Post;