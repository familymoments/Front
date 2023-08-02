import styles from "./index.module.css";
import HelloText from "../../components/HelloText";
import Post from "../../components/Post";

const Home=()=>{
    const postId=1;

    return(
        <div className={styles.wrapper}>
            <HelloText user="딸내미" Dday="2"></HelloText>
            <Post postId={postId}></Post>
            {/* <Post postId="2"></Post> */}
        </div>)
}

export default Home;