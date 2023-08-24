import styles from "./index.module.css";


import {useState, useRef , useEffect, useCallback} from "react";
import { useNavigate } from "react-router-dom";

import PostContentSide from "../PostContentSide";

import {postid} from "../../atom"
import { useRecoilState } from "recoil";


const PostContent=({postlist})=>{

    useEffect(()=>{
    console.log('postcontent',postlist);
    },[]);
    

    const nav=useNavigate();
    

    return(
        <div className={styles.postText}>
            <span onClick={()=>{
                nav(`/Main/postdetail/${postlist.postId}`, {state:{postone_:postlist}});
            }}>{postlist.content}</span>
            <PostContentSide post={postlist}>
                
            </PostContentSide>
            
        </div>
    )
};

export default PostContent;