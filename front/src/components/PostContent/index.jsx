import styles from "./index.module.css";


import {useState, useRef , useEffect, useCallback} from "react";
import { useNavigate } from "react-router-dom";

import PostContentSide from "../PostContentSide";

import {postid} from "../../atom"
import { useRecoilState } from "recoil";


const PostContent=(props)=>{

    const postId = props.postId;
    const nav=useNavigate();
    const post=props.postlist;
    

    return(
        <div className={styles.postText}>
            <span onClick={()=>{
                nav(`/Main/postdetail/${postId}`);
            }}>{props.postcontent}</span>
            <PostContentSide showmodal={props.showmodal} post={props.postlist} postId={props.postId} postheart={post.loved} postcontent={props.postcontent} pushHeart={props.pushHeart}>
                
            </PostContentSide>
            
        </div>
    )
};

export default PostContent;