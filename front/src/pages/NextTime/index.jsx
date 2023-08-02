import React from 'react';
import Button from "../../components/Button";
import classes from "../CreateFamily/CreateFamily.module.css";
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const NextTime = () => {
    return (
        <div>
            <Header showIcon={true} />
            <Button btn={classes.btn} />
            <Footer />
        </div>
    );
}

export default NextTime;
