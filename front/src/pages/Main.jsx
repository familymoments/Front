
import classes from "./Main.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Home,Album,CreatePost,Calendar} from "../pages";
import Post from "../components/Post";
import { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import PostDetail from "./PostDetail";
import UpdatePost from "./UpdatePost";




const Main = ()=>{
    const [mode,setmode]=useState("HOME");


    return (
    <div className={classes.wrapper}>
        <Header title="Family Moments" showIcon={true}/>
        {/* route로 안의 내용만 바꿈 */}
        <div className={classes.tmp}>
            <Routes>
                <Route path="/postlist" element={<Home/>}></Route>
                <Route path="/album" element={<Album/>}></Route>
                <Route path="/createPost" element={<CreatePost/>}></Route>
                <Route path="/calendar" element={<Calendar/>}></Route>
                <Route path="마이페이지" element={`마이페이지 컴포넌트`}></Route>

                <Route  path="/postdetail" element={<PostDetail/>}/>
                <Route  path="/updatePost/:postId" element={<UpdatePost />}/>

                {/* 페이지 내부에서 추가적으로 route해야하는 페이지도 이 부분에 작성 */}
                
            </Routes>
        </div>
        
        <Footer nowMode={mode} ></Footer>
    </div>)
}



export default Main;