// import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import classes from "./App.module.css";
import Landing from './pages/Landing';


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
                    <Route path="/" element={<Landing/>} />
                </Routes>
            </BrowserRouter>


        </div>
    );
}

export default App;