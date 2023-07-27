import styles from "./index.module.css";
import ClickDots from "../ClickDots";

import {BiDotsHorizontalRounded} from "react-icons/bi";
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai";

import {useState, useRef , useEffect} from "react";



const PostContent=(props)=>{

    const [toggle,setToggle]=useState(true);
    
    
    

    return(
        <div className={styles.postText}>
            <span>{props.postcontent}</span>
            <span>
                {/* 수정,신고,삭제 */}
                <BiDotsHorizontalRounded className={styles.icon} onClick={
                    (e)=>{
                        e.preventDefault();
                        setToggle(!toggle);
                    }
                }></BiDotsHorizontalRounded>
                {toggle&&<ClickDots onClickOutside={()=>{toggle(false)}}></ClickDots>}
                {/* 하트 */}
                <div onClick={props.pushHeart}>{props.postheart===true ? (<AiFillHeart className={styles.iconFill} ></AiFillHeart>) : (<AiOutlineHeart className={styles.icon} ></AiOutlineHeart>)}</div>
                
            </span>
            
        </div>
    )
};

export default PostContent;