import classes from "./Nav.module.css";

const Nav = props => {
    return (
        <div className={classes.nav}>
            <div className={classes.home}></div>
            <div className={classes.album}></div>
            <div className={classes.plus}></div>
            <div className={classes.cld}></div>
            <div className={classes.my}></div>
        </div>
    );
};

export default Nav;