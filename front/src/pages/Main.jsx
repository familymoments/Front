
import classes from "./Main.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./Home";
import { useState } from "react";



const Main = ()=>{
    const [page,setPage]=useState(<Home/>);
    const [mode,setmode]=useState("HOME");

    return <div className={classes.wrapper}>
        <Header title="Family Moments" showIcon={true}/>
        {page}
        <Footer noeMode={mode}></Footer>
    </div>
}


export default Main;