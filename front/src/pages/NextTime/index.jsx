import React from 'react';
import Button from "../../components/Button";
import classes from "../CreateFamily/CreateFamily.module.css";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HelloText2 from '../../components/HelloText2';

const NextTime = () => {
    return (
        <div>
            <Header showIcon={true} />
            <HelloText2 user="융" customText="지금 바로 Family Moments를 시작해보세요!" />
            <Button btn={classes.btn} />
            <Footer />
        </div>
    );
}

export default NextTime;
