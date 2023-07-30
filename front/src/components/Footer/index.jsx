/**footer 컴포넌트 입니다 */
import classes from "./Footer.module.css";
import FooterIcon from "../FooterIcon";
import { AiFillHome,AiOutlineHome ,AiOutlineCalendar,AiFillCalendar,AiFillPlusCircle} from 'react-icons/ai';
import { BiPhotoAlbum,BiSolidPhotoAlbum ,BiUser,BiSolidUser} from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Footer =(props)=>{
    const nav = useNavigate();

    return (
        <div className={classes.Footer}>
            <FooterIcon iconName={AiOutlineHome} iconText="홈" onClick={()=>{
                nav('./postlist');
            }}></FooterIcon>
            <FooterIcon iconName={BiPhotoAlbum} iconText="앨범" onClick={()=>{
                nav('./album');
            }}></FooterIcon>
            <AiFillPlusCircle className={classes.iconPlus} onClick={()=>{
                nav('./createPost');
            }}/>
            <FooterIcon iconName={AiOutlineCalendar} iconText="캘린더" onClick={()=>{
                nav('./calendar');
            }}></FooterIcon>
            <FooterIcon iconName={BiUser} iconText="마이페이지"  onClick={()=>{
                nav('./my');
            }}></FooterIcon> 
            

        </div>
    )
}

export default Footer;