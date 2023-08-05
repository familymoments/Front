import { useNavigate } from "react-router-dom";
import classes from "./ImgButton.module.css";

const ImgButton = (props) => {
    const nav = useNavigate();

    return (
        <>
            <img
                src={`${props.lnk}`}
                className={classes.wrapper}
                id={props.id}
                onClick={() => alert("게시글 모달창")}
                // onClick={() => nav("./detail", { state: "---inner data---" })}
            ></img>
        </>
    );
};

export default ImgButton;
