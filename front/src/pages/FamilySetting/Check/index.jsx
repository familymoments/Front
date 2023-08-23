import { useRecoilState } from "recoil";
import { header } from "../../../atom";
import Button from "../../../components/Button";
import MyText from "../../../components/MyText";
// import classes from "../../Exit/SetUp/Setting/Setting.module.css";
import classes from "./Check.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Check = () => {
    const SERVER = process.env.REACT_APP_SERVER_URL;
    const [headers, setHeaders] = useRecoilState(header);

    const [familyId, setFamilyId] = useState(5);
    const [code, setCode] = useState(0);

    useEffect(() => {
        if (code === 200) {
            navigate("/landing/newfamily");
        }
    }, [code]);

    const navigate = useNavigate();

    const resignHandler = () => {
        // api 연동해야되는데 일단 id먼저만들고..
        deleteUser();
    };

    const deleteUser = async () => {
        const response = await axios.delete(
            `${SERVER}/families/${familyId}/withdraw`,
            {
                headers,
            }
        );
        console.log(response.data);
        setCode(response.data.code)
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.bold2}>
                <MyText text={<b>우리 가족을 정말 탈퇴하시겠습니까?</b>} />
            </div>
            <Button
                onClick={resignHandler}
                btn={classes.btn3}
                title="계정 탈퇴"
            />
            <Button
                onClick={() => {
                    navigate("../my/set");
                }}
                btn={classes.btn}
                title="취소"
            />
        </div>
    );
};

export default Check;
