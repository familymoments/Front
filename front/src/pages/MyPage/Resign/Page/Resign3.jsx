import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button";
import classes from "./Resign3.module.css";
import axios from "axios";
import { useRecoilState } from "recoil";
import { header } from "../../../../atom";

const Resign3 = () => {
    const SERVER = process.env.REACT_APP_SERVER_URL;
    const [headers, setHeaders] = useRecoilState(header);

    const nav = useNavigate();

    const resignHandler = () => {
        deleteUser();
        nav("/");
    };

    const cancelHandler = () => {
        nav("/main/my");
    };

    const deleteUser = async () => {
        const response = await axios.delete(`${SERVER}/users`, {
            headers,
        });
        console.log(response.data)
    };

    return (
        <div className={classes.wrapper}>
            <p className={classes.p}>
                계정 삭제를 계속하면 회원님의 프로필 및
                <br />
                계정 상세 정보가 완전히 삭제됩니다.
            </p>
            <h3 className={classes.h3}>
                그동안 Family Moments를
                <br />
                이용해주셔서 감사합니다.
            </h3>
            <Button
                title="계정 탈퇴"
                btn={classes.btn}
                onClick={resignHandler}
            />
            <Button title="취소" btn={classes.btn2} onClick={cancelHandler} />
        </div>
    );
};

export default Resign3;
