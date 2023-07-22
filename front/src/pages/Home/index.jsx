import styles from "./index.module.css";
import HelloText from "../../components/HelloText";
import Post from "../../components/Post";

const Home=()=>{
    return(
        <div className={styles.wrapper}>
            <HelloText user="딸내미" Dday="2"></HelloText>
            <Post></Post>
            <Post></Post>
        </div>)
}

export default Home;