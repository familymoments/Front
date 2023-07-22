/**footer 컴포넌트 입니다 */
import classes from "./Footer.module.css";
import FooterIcon from "../FooterIcon";
import { AiFillHome,AiOutlineHome ,AiOutlineCalendar,AiFillCalendar,AiFillPlusCircle} from 'react-icons/ai';
import { BiPhotoAlbum,BiSolidPhotoAlbum ,BiUser,BiSolidUser} from "react-icons/bi";
import { useState } from "react";

const Footer =(props)=>{


    return (
        <div className={classes.Footer}>
            <FooterIcon iconName={AiOutlineHome} iconText="홈" onClick={()=>{
                props.switchMode(0);
            }}></FooterIcon>
            <FooterIcon iconName={BiPhotoAlbum} iconText="앨범" onClick={()=>{
                props.switchMode(1);
            }}></FooterIcon>
            <AiFillPlusCircle className={classes.iconPlus} onClick={()=>{
                props.switchMode(2);
            }}/>
            <FooterIcon iconName={AiOutlineCalendar} iconText="캘린더" onClick={()=>{
                props.switchMode(3);
            }}></FooterIcon>
            <FooterIcon iconName={BiUser} iconText="마이페이지"></FooterIcon> 
            

        </div>
    )
}

export default Footer;