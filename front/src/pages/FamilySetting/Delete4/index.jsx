import Button from "../../../components/Button";
import MyText from "../../../components/MyText";
// import styles from "../../Exit/Withdrawal/Withdraw2/Withdraw2.module.css";
import classes from "./Delete4.module.css";
import InviteLinkBar from "../../../components/InviteLinkBar";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { header } from "../../../atom";
import { useEffect, useState } from "react";
import axios from "axios";

const Delete4 = () => {
    const SERVER = process.env.REACT_APP_SERVER_URL;
    const [headers, setHeaders] = useRecoilState(header);

    const nav = useNavigate();

    const [password, setPassword] = useState("");
    const [code, setCode] = useState(0);
    const [message, setMessage] = useState("");

    const params = { password: password };

    const fetchPW = async () => {
        const response = await axios.post(
            `${SERVER}/users/auth/compare-pwd`,
            params,
            { headers }
        );
        console.log(response.data);
        setCode(response.data.code);
        setMessage(response.data.message);
        return response.data;
    };

    const handleInputChange = (event) => {
        const { value } = event.target;
        setPassword(value);
    };

    const continueHandler = () => {
        console.log("password : ", password);
        fetchPW();
    };

    useEffect(() => {
        if (code === 200) {
            nav("../check")
            console.log("success")
        }
    }, [code]);

    return (
        <div className={classes.wrapper}>
            <div className={classes.div}>
                <p className={classes.p}>
                    계속 진행하려면 보안을 위해
                    <br />
                    현재 비밀번호를 입력해주세요.
                </p>
                <input
                    className={classes.input}
                    placeholder="현재 비밀번호"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleInputChange}
                ></input>
                {code !== 200 && <p className={classes.errorText}>{message}</p>}
                <Button
                    title="계속하기"
                    btn={classes.btn}
                    onClick={continueHandler}
                />
            </div>
        </div>
    );
};

export default Delete4;
