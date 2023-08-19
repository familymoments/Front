import { useNavigate } from "react-router-dom";
import classes from "./ImgButton.module.css";

const ImgButton = (props) => {

    return (
        <>
            <img
                src={`${props.img1}`}
                className={classes.wrapper}
                id={props.postId}
                // onClick={() => alert("hel")}
                // 상위 컴포넌트의 함수를 불러와서 실행
                onClick={() => props.modalValue(props.img1)}
            ></img>
        </>
    );
};

export default ImgButton;
