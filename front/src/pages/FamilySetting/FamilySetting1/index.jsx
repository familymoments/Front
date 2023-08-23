import React, { useEffect, useState } from "react";
import MyText from "../../../components/MyText";
import InviteLinkBar from "../../../components/InviteLinkBar";
import Button from "../../../components/Button";
// import classes from "../../Family/CreateFamily/CreateFamily.module.css";
import classes from "./FamilySetting1.module.css";
import styles from "../../Family/CreateFamily4/CreateFamily4.module.css";

import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { header } from "../../../atom";
import axios from "axios";

const FamilySetting1 = () => {
    const SERVER = process.env.REACT_APP_SERVER_URL;
    const [headers, setHeaders] = useRecoilState(header);

    const [url, setUrl] = useState("");

    const getFamily = async () => {
        const response = await axios.get(`${SERVER}/families/5`, { headers });
        console.log(response.data);
        setUrl(response.data.result.inviteCode);
        return response.data;
    };

    useEffect(() => {
        getFamily();
    }, []);

    const handleInputChange = (event) => {
        const { value } = event.target;
        setUrl(value);
    };

    // 배포환경에서 모바일에서 확인해보고 안될시
    const clipBoard = () => {
        navigator.clipboard.writeText(url);
        alert("클립보드에 복사되었습니다.");
    };

    return (
        <div className={classes.wrapper}>
            <div>
                <div className={classes.content3}>
                    <MyText text="가족 초대 링크" />
                </div>
                <input
                    className={classes.input}
                    placeholder="가족에 속해있지 않습니다."
                    name="text"
                    type="text"
                    value={url}
                    onChange={handleInputChange}
                ></input>
                <Button
                    btn={classes.btn2}
                    title="초대 링크 복사"
                    onClick={clipBoard}
                />
            </div>
        </div>
    );
};

export default FamilySetting1;
