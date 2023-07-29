
import classes from "./Main.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Home,Album,CreatePost,Calendar} from "../pages";
import Post from "../components/Post";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";



const Main = ()=>{
    const [page,setPage]=useState(<Home/>);
    const [mode,setmode]=useState("HOME");


    return (
    <div className={classes.wrapper}>
        <Header title="Family Moments" showIcon={true}/>
        {/* route로 안의 내용만 바꿈 */}
        <Routes>
            <Route path="/postlist" element={<Home/>}></Route>
            <Route path="/album" element={<Album/>}></Route>
            <Route path="/createPost" element={<CreatePost/>}></Route>
            <Route path="/calendar" element={<Calendar/>}></Route>
            <Route path="마이페이지" element={`마이페이지 컴포넌트`}></Route>

            {/* 페이지 내부에서 추가적으로 route해야하는 페이지도 이 부분에 작성 */}
            <Route  path="/post/:postId" element={<Post></Post>}/>
        </Routes>
        <Footer nowMode={mode} ></Footer>
    </div>)
}



export default Main;