/**게시글의 사용자사진과 얼굴이 나오는 header입니다 */

import styles from "./index.module.css";

const PostUserHeader=(props)=>{
    const isnormal=props.isnormal;
    console.log(isnormal);
    return (
        <div className={styles.postHeader}>
            <span className={`${isnormal===true ? styles.userinfo : styles.userinfobig}`}>
                <span><img src=""/> </span>
                <span>{props.username}</span>
            </span>
            <span className={`${isnormal ? styles.date : styles.datebig}`}>{props.postdate}</span>
        </div>
    )
};

export default PostUserHeader;
