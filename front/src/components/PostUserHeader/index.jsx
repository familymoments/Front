/**게시글의 사용자사진과 얼굴이 나오는 header입니다 */

import styles from "./index.module.css";

import {token,postid,userImg} from "../../atom";
import { useRecoilState,useRecoilValue } from "recoil";

const PostUserHeader=(props)=>{
    const postuserImg=useRecoilValue(userImg);
    const isnormal=props.isnormal;
    return (
        <div className={styles.postHeader}>
            <span className={`${isnormal===true ? styles.userinfo : styles.userinfobig}`}>
                <span><img className={styles.userImg} src={postuserImg}/> </span>
                <span>{props.username}</span>
            </span>
            <span className={`${isnormal ? styles.date : styles.datebig}`}>{props.postdate}</span>
        </div>
    )
};

export default PostUserHeader;
