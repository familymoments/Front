import classes from "./Main.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Main = ()=>{
    return <div className={classes.wrapper}>
        <Header title="Family Moments"></Header>
        <Footer></Footer>
    </div>
}

export default Main;