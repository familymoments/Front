import styles from "./index.module.css";

import PostContentSide from "../PostContentSide";

const ShowComment = (props)=>{

    const pushHeart=(id)=>{
        console.log(id+"하트누름");
    }

    return (
        <div className={styles.wrapper}>
            <span>
                <div className={styles.content}>
                    <img className={styles.userimg} src="" alt="프로필사진" />
                    <div>마미</div>
                </div>
                <div className={styles.text}>
                우리 가족 사진 너무 잘 나왔다~~!
                엄마도 카톡으로 보내줘~sssss
                </div>

            </span>
            <PostContentSide pushHeart={pushHeart} postHeart={props.heart} createTime={props.createTime}>

            </PostContentSide>
        </div>
    )
};

export default ShowComment;