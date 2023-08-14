import classes from "./Main.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { Home, Album, CreatePost, Calendar, MyPage } from "../pages";
import Post from "../components/Post";
import { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import PostDetail from "./PostDetail";
import UpdatePost from "./UpdatePost";

import AlbumDetail from "./Album/Detail";

import CalendarDetail from "./Calendar/Detail";

//강퇴페이지
import Withdrawal from './Exit/Withdrawal';
import Withdrawal2 from './Exit/Withdrawal2';
import Withdrawal4 from "./Exit/Withdrawal4";

// mypage관련 라우팅 정리하기
import Notice from "./MyPage/Notice";
import Profile from "./MyPage/Profile";

//modal state 상태관리
import {atom} from "recoil";

const Main = () => {
    
    const [mode,setMode]=useState();
    const [modalopen,setModalopen]=useState(false);
    const [modalmode,setModalmode]=useState("");


    const showmodal=(modalmode)=>{
        setModalmode(modalmode);
        setModalopen(!modalopen);
    
    }
    // useEffect(()=>{
    //     showmodal(false);
    // },[mode]);

    return (
        <div className={classes.wrapper}>
            {modalopen&&<Modal showmodal={showmodal} modalmode={modalmode}></Modal>}
            <Header title="Family Moments" showIcon={true} />
            {/* route로 안의 내용만 바꿈 */}
            <div className={classes.tmp}>
                <Routes>
                    <Route path="/postlist" element={<Home showmodal={showmodal}/>}></Route>
                    <Route path="/album" element={<Album />}></Route>
                    <Route path="/createPost" element={<CreatePost />}></Route>
                    <Route path="/calendar" element={<Calendar />}></Route>
                    <Route path="/my" element={<MyPage />}></Route>

                    <Route path="/postdetail/:postId" element={<PostDetail showmodal={showmodal}/>} />
                    <Route path="/updatePost/:postId" element={<UpdatePost />} />

                    <Route path="/calendar/detail" element={<CalendarDetail/>} />

                    <Route path="/my/notice" element={<Notice />}></Route>
                    <Route path="/my/profile" element={<Profile />}></Route>

                    {/*강퇴 페이지*/}
                    <Route path='/withdrawal' element={<Withdrawal />} />
                    <Route path='/withdrawal2' element={<Withdrawal2 />} />
                    <Route path='/withdrawal4' element={<Withdrawal4 />} />

                    {/* 페이지 내부에서 추가적으로 route해야하는 페이지도 이 부분에 작성 */}
                </Routes>
            </div>

            

            <Footer nowMode={mode}></Footer>
        </div>
    );
};

export default Main;
