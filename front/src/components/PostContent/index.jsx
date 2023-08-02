import styles from "./index.module.css";


import {useState, useRef , useEffect} from "react";
import { useNavigate } from "react-router-dom";

import PostContentSide from "../PostContentSide";


const PostContent=(props)=>{


    const nav=useNavigate();
    const post=props.postlist;
    

    return(
        <div className={styles.postText}>
            <span onClick={()=>{
                nav(`/Main/postdetail/${props.postId}` ,{state:{post}});
            }}>{props.postcontent}</span>
            <PostContentSide showmodal={props.showmodal} post={props.postlist} postId={props.postId} postheart={props.postheart} postcontent={props.postcontent} pushHeart={props.pushHeart}>
                
            </PostContentSide>
            
        </div>
    )
};

export default PostContent;