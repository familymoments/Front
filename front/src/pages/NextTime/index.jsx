import React from 'react';
import Button from "../../components/Button";
import classes from "../CreateFamily/CreateFamily.module.css";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HelloText2 from '../../components/HelloText2';
// import BubbleButton from '../../components/BubbleButton';
// import styles from './NextTime.module.css';
// import AcceptText from '../../components/AcceptText';

const NextTime = () => {
    return (
        <div>
        <Header showIcon={true} />
        <HelloText2 user="융" customText="지금 바로 Family Moments를 시작해보세요!" />
        {/* <div className= {styles.buttons}>
            <div lassName = {styles.ok}>
                <BubbleButton type = "purple" text =" 수락" layout = ""/>
            </div>
            < div className = {styles.no}>
                <BubbleButton type = "blue" text =" 거절" layout = ""/>
            </div>
        </div> */}
        <Button btn={classes.btn} />
        <Footer/>
        </div>
    );
}

export default NextTime;

//화면 삭제 !!!!
