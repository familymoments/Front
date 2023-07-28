// import "./App.css";
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import classes from "./App.module.css";
import Landing from './pages/Landing';

import Login from './pages/Login.jsx';
import Findid from './pages/Findid';
import Findid2 from './pages/Findid2';
import Main from './pages/Main';
import NewFamily from './pages/NewFamily';
import MyPage from './pages/MyPage';



function App() {

    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      }
    useEffect(() => {
        setScreenSize();
      });
    return (
        <div className={classes.App}>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Landing/>}></Route>
                    <Route path = "/login" element={<Login/>}></Route>
                    <Route path = "/findid" element = {<Findid/>}></Route>
                    <Route path = "/findid2" element = {<Findid2/>}></Route>
  
        

                    <Route path='/' element={<NewFamily />} />
                    <Route path="/main/*" element={<Main/>} />

                    {/* 페이지 생성 시 기본 값 */}
                    <Route path="/ex" element={<Landing/>} />

                </Routes>
            </BrowserRouter>
            
            
        </div>
    );
}

export default App;
