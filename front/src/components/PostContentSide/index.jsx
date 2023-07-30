import styles from "./index.module.css";

import ClickDots from "../ClickDots";

import {BiDotsHorizontalRounded} from "react-icons/bi";
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai";

import { useState } from "react";

const PostContentSide=(props)=>{

    const [toggle,setToggle]=useState(false);
    const [loved,setLoved]=useState(props.postheart);

    const pushHeart=(e)=>{
        e.preventDefault();
        setLoved(!loved);
        props.pushHeart(loved);
    }

    return (
        <span className={styles.wrapper}>
            <BiDotsHorizontalRounded className={styles.icon} onClick={
                    (e)=>{
                        e.preventDefault();
                        setToggle(!toggle);
                    }
                }>   
            </BiDotsHorizontalRounded>
            {toggle&&<ClickDots postId={props.postId} postcontent={props.postcontent} onClickOutside={()=>{toggle(false)}}></ClickDots>}
            {/* 하트 */}
            <div onClick={pushHeart}>{loved===true ? (<AiFillHeart className={styles.iconFill} ></AiFillHeart>) : (<AiOutlineHeart className={styles.icon} ></AiOutlineHeart>)}</div>
            {props.createTime && <div className={styles.createTime}>{props.createTime}</div>}
        </span>
    )
};
export default PostContentSide;