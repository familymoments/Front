import styles from "./index.module.css";


import {useState, useRef , useEffect} from "react";
import { useNavigate } from "react-router-dom";

import PostContentSide from "../PostContentSide";


const PostContent=(props)=>{

    const postId=props.postId;
    

    const nav=useNavigate();
    
    

    return(
        <div className={styles.postText}>
            <span onClick={()=>{
                nav("/Main/postdetail");
            }}>{props.postcontent}</span>
            <PostContentSide postheart={props.postheart} pushHeart={props.pushHeart}>
                
            </PostContentSide>
            
        </div>
    )
};

export default PostContent;