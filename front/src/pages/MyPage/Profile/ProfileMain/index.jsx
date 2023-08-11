import classes from "./Main.module.css";
// import profileImg from "../../../assets/defaultProfile.png";
import { useEffect, useReducer, useState } from "react";
import Box from "../../../../components/Box";
import { GoPencil } from "react-icons/go";

import axios from "axios";
import useAsync from "../../../../hooks/useAsync";
import { Link } from "react-router-dom";

const authToken = localStorage.getItem("token");

// console.log(authToken)

const headers = {
    "X-AUTH-TOKEN": authToken,
};

// 프로필 페이지
const ProfileMain = (props) => {
    // 상태관리 할 필요가 없지않나..?
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profImg, setProfImg] = useState('');
    const [num, setNum] = useState();
    const [day, setDay] = useState();

    console.log(props)

    useEffect(() => {
        setName(props.name)
        setEmail(props.email)
        setProfImg(props.profImg)
        setNum(props.num)
        setDay(props.day)
    }, [props])

    // 업로드 총 갯수 객체
    const totalNum = {
        // jsx를 바로 넘기면 되네용
        sentence: (
            <p>
                Total
                <br />
                Upload
            </p>
        ),
        // ?. 옵셔널 체이닝 연산자 -> 객체하위 내용이 null 이거나 undefined인 경우
        num: num,
        color: {
            background: `linear-gradient( to right, #9378FF99, #9378FF )`,
        },
        pcolor: {
            color: `#9378FF`,
        },
    };

    // 일 수 객체
    const withDay = {
        sentence: (
            <p>
                Family moments와
                <br />
                함께한지
            </p>
        ),
        num: day,
        color: {
            background: `linear-gradient( to right, #EF88A199, #EF88A1 )`,
        },
        pcolor: {
            color: `#EF88A1`,
        },
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.top}>
                <img
                    className={classes.img}
                    src={profImg}
                    alt="프로필 사진"
                ></img>
                <p className={classes.name}>{name}</p>
                <p className={classes.email}>{email}</p>
            </div>
            <hr className={classes.hr}></hr>
            <div className={classes.bottom}>
                <Box {...totalNum} />
                <Box {...withDay} />
            </div>
            <hr className={classes.hr}></hr>
            <GoPencil className={classes.pen} onClick={props.editHandler} />
        </div>
    );
};

export default ProfileMain;
