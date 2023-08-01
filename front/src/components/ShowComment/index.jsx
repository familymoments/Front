import styles from "./index.module.css";

import PostContentSide from "../PostContentSide";

const ShowComment = ({commentinfo, pushHeart})=>{

    // const pushHeart=(id)=>{
    //     console.log(id+"하트누름");
    // }

    return (
        <div className={styles.wrapper}>
            <span>
                <div className={styles.content}>
                    <img className={styles.userimg} src={commentinfo.profileImg} alt="프로필사진" />
                    <div>{commentinfo.nickname}</div>
                </div>
                <div className={styles.text}>
                {commentinfo.content}
                </div>

            </span>
            <PostContentSide pushHeart={pushHeart} postHeart={commentinfo.heart} createTime={commentinfo.updatedAt}>

            </PostContentSide>
        </div>
    )
};

export default ShowComment;