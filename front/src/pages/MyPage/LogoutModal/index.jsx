import axios from "axios";
import Button from "../../../components/Button";
import classes from "./LogoutModal.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { header } from "../../../atom";

const LogoutModal = (props) => {
    const SERVER = process.env.REACT_APP_SERVER_URL;
    const [headers, setHeaders] = useRecoilState(header);

    const postLogout = async () => {
        const response = await axios.post(`${SERVER}/users/log-out`, null, {
            headers,
        });

        props.setIsModal(false);
        localStorage.removeItem("token");
    };

    return (
        <div className={classes.wrapper}>
            <div
                className={`${classes.backdrop}`}
                onClick={() => props.setIsModal(false)}
            ></div>
            <div className={classes.modalWrapper}>
                <p className={classes.p}>
                    로그아웃
                    <br />
                    하시겠습니까?
                </p>
                <div className={classes.btnWrapper}>
                    <Link to={"/"} onClick={postLogout}>
                        <Button title="로그아웃" btn={classes.btn} />
                    </Link>
                    <Button
                        title="취소"
                        btn={classes.btn2}
                        onClick={() => props.setIsModal(false)}
                    />
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;
