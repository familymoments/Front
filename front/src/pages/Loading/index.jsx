import { Outlet,useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import logo from "../../assets/mainLogo.png";
import FamilyMoments from "../../assets/FamilyMoments.png";
import styles from "./index.module.css";

const Loading = ()=>{
    const nav=useNavigate();
    useEffect(()=>{setTimeout(()=>{
        nav('/landing/login');
    },1000);},[])

    return <div className={styles.wrapper}>
        <img src={FamilyMoments} alt="Family Moments" />
        <div className={styles.lending}>가족들과 소중한 순간을 공유해보세요!</div>
        <img src={logo} alt="Logo"/>
    </div>
}

export default Loading;