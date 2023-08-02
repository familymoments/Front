import classes from "./ImgButton.module.css";

const ImgButton = (props) => {
    return (
        <>
            <img src={`${props.lnk}`} className={classes.wrapper} id={props.id}></img>
        </>
    );
};

export default ImgButton;
