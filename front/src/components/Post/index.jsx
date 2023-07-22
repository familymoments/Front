import styles from "./index.module.css";
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useState,useEffect } from "react";

import 'swiper/css';
import 'swiper/css/pagination';

import {BiDotsHorizontalRounded} from "react-icons/bi";
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai";

const Post =()=>{
    const photos=[
        {src:"footer-home.png"},
        {src: "btn_select_photo.png"}];



    return (<div className={styles.wrapper}>
        <div className={styles.postHeader}>
            <span className={styles.userinfo}>
                <span><img src=""/> </span>
                <span>딸내미</span>
            </span>
            <span className={styles.date}>2023.05.12 (토)</span>
        </div>
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
            <div className={styles.postText}>
                <span>우리가족사진 삼각대로 찍기~~</span>
                <span>
                    <BiDotsHorizontalRounded className={styles.icon}></BiDotsHorizontalRounded>
                    <AiOutlineHeart className={styles.icon}></AiOutlineHeart>
                </span>
                
            </div>
        </div>
    </div>)
};

export default Post;