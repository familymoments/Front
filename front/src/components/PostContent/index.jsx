import styles from "./index.module.css";


import {useState, useRef , useEffect} from "react";
import { useNavigate } from "react-router-dom";

import PostContentSide from "../PostContentSide";


const PostContent=(props)=>{


    const nav=useNavigate();
    
    

    return(
        <div className={styles.postText}>
            <span onClick={()=>{
                nav(`/Main/postdetail/${props.postId}`);
            }}>{props.postcontent}</span>
            <PostContentSide postId={props.postId} postheart={props.postheart} postcontent={props.postcontent} pushHeart={props.pushHeart}>
                
            </PostContentSide>
            
        </div>
    )
};

export default PostContent;