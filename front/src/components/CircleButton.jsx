import classes from "./CircleButton.module.css";

const CircleButton = (props) => {
    return (
        <div
            className={
                props.type === "pink" ? classes.circle1 : classes.circle2
            }
            onClick={() => {
                alert("CircleButton Click");
            }}
        >
            <p className={
                props.type === "pink" ? classes.title1 : classes.title2
            }>{props.title}</p>
        </div>
    );
};

export default CircleButton;
