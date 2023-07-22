// import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import classes from "./App.module.css";
import Landing from './pages/Landing';
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


                    <Route path='/' element={<NewFamily />} />
                    <Route path="/main" element={<Main/>} />

                    {/* 페이지 생성 시 기본 값 */}
                    <Route path="/ex" element={<Landing/>} />
                </Routes>
            </BrowserRouter>

            
        </div>
    );
}

export default App;
