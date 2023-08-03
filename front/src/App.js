
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { useEffect,useState } from 'react';
import classes from "./App.module.css";
import {RecoilRoot, atom, selector, useRecoilState, useRecoilValue,} from "recoil";


import Loading from './pages/Loading';
import Landing from './pages/Landing';
import Main from './pages/Main';
import Login from './pages/Login';
import Findid from './pages/Findid';
import Findid2 from './pages/Findid2';
import NewFamily from './pages/NewFamily';
import MyPage from './pages/MyPage';
import Signin from './pages/Signin';
import Header from './components/Header';

import Findpwd from './pages/Findpwd';
import Findpwd2 from './pages/Findpwd2';
import Findpwd3 from "./pages/Findpwd3";
import CreateFamily3 from './pages/CreateFamily3';
import CreateFamily4 from './pages/CreateFamily4';
import FamilyParticipation from './pages/FamilyParticipation';
import CreateFamily2 from './pages/CreateFamily2';
import CreateFamily from './pages/CreateFamily';
import CreateFamily5 from './pages/CreateFamily5';
import NextTime from './pages/NextTime';
import CreateFamily5_2 from './pages/CreateFamily5_2';


function App() {

    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    useEffect(() => {
        setScreenSize();
    });

    const [title,setTitle]=useState("FamilyMoments");
    const changeTitle=(e)=>{
        setTitle(e);
    }

    return (
        <RecoilRoot>
        <div className={classes.App}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Loading/>}></Route>
                    
                    
                    {/* Header만 필요한 페이지들 */}
                    <Route path="/landing" element={<Landing title={title}/>}>
                        <Route path = "/landing/login" element={<Login/>}></Route>
                        <Route path = "/landing/signin" element = {<Signin changeTitle={changeTitle}/>}></Route>
                        <Route path = "/landing/findid" element = {<Findid changeTitle={changeTitle}/>}></Route>
                        <Route path = "/landing/findid2" element = {<Findid2 changeTitle={changeTitle}/>}></Route>
                        <Route path = "/landing/findpwd" element = {<Findpwd changeTitle={changeTitle}/>}></Route>
                        <Route path = "/landing/findpwd2" element = {<Findpwd2 changeTitle={changeTitle}/>}></Route>
                        <Route path = "/landing/findpwd3" element = {<Findpwd3 changeTitle={changeTitle}/>}></Route>
                        
                        <Route path='/landing/newfamily' element={<NewFamily />} />


                        <Route path='/landing/familyparticipation' element={<FamilyParticipation />} />
                        <Route path='/landing/createfamily5' element={<CreateFamily5 />} />
                        <Route path='/landing/createfamily5_2' element={<CreateFamily5_2 />} />
                        
                        {/* 생성 시 */}
                        <Route path='/landing/페이지링크' element={"페이지 컴포넌트"} />
                    </Route>


                    {/* Header와 Footer가 필요한 페이지들 */}
                    <Route path="/main/*" element={<Main/>} />

                    <Route path='/landing/createfamily' element={<CreateFamily />} />
                    <Route path='/landing/createfamily2' element={<CreateFamily2 />} />
                    <Route path='/landing/createfamily3' element={<CreateFamily3 />} />
                    <Route path='/landing/createfamily4' element={<CreateFamily4 />} />
                    <Route path='/landing/nexttime' element={<NextTime />} />

                    {/* 페이지 생성 시 기본 값 */}
                    <Route path="/ex" element={<Loading/>} />

                </Routes>
            </BrowserRouter>
                
                
        </div>
    </RecoilRoot>
    );
}

export default App;