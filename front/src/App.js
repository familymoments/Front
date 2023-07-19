// import "./App.css";
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import classes from "./App.module.css";
import Landing from './pages/Landing';
import Login from './pages/Login.jsx';
import Findid from './pages/Findid';


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
                    <Route path="/" element={<Landing/>}>
                        <Route path = "login" element={<Login/>}></Route>
                    </Route>
                    <Route path = "/findid" element = {<Findid/>}></Route>
                </Routes>
            </BrowserRouter>
            
            
        </div>
    );
}

export default App;
