

import classes from "./Main.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Home,Album,CreatePost,Calendar} from "../pages";
import { useState } from "react";



const Main = ()=>{
    const [page,setPage]=useState(<Home/>);
    const [mode,setmode]=useState("HOME");
    const modes=[<Home/>,<Album/>,<CreatePost/>,<Calendar/>];

    const switchMode=(num)=>{
        setPage(modes[num]);
    }


    return <div className={classes.wrapper}>
        <Header title="Family Moments" showIcon={true}/>
        <div className={classes.tmp}>{page}</div>
        <Footer nowMode={mode} switchMode={switchMode} ></Footer>
    </div>
}



export default Main;