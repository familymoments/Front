import styles from "./index.module.css";

const PostUserHeader=(props)=>{
    return (
        <div className={styles.postHeader}>
            <span className={styles.userinfo}>
                <span><img src=""/> </span>
                <span>{props.username}</span>
            </span>
            <span className={styles.date}>{props.postdate}</span>
        </div>
    )
};

export default PostUserHeader;
