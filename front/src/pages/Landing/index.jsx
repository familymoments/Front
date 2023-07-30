import { Outlet,useNavigate } from "react-router-dom";
import {useState} from "react";
import logo from "../../assets/mainLogo.png";
import FamilyMoments from "../../assets/FamilyMoments.png";
import styles from "./index.module.css";

const Landing = ()=>{
    const nav=useNavigate();
    setTimeout(()=>{
        nav('login');
    },1000);

    return <div className={styles.wrapper}>
        {/* <Outlet/> */}
        <img src={FamilyMoments} alt="Family Moments" />
        <div className={styles.landingFont}>가족들과 소중한 순간을 공유해보세요!</div>
        <img src={logo} alt="Logo"/>
    </div>
}

export default Landing;