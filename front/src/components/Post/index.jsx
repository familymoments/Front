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
        {src:"footer-home.png"},
        {src: "btn_select_photo.png"}];

    const [heart,setHeart]=useState();
    const [postId,setPostId]=useState(props.postId);

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