import classes from "./Profile.module.css";
import profileImg from "../../../assets/defaultProfile.png";
import { useEffect, useReducer, useState } from "react";
import Box from "../../../components/Box";
import { GoPencil } from "react-icons/go";

import axios from "axios";

const authToken = localStorage.getItem("jwtToken");
// console.log(authToken)

const headers = {
    "X-AUTH-TOKEN": authToken,
};

//백 연동 데이터 상태관리
function reducer(state, action) {
    switch (action.type) {
        case "LOADING":
            return {
                loading: true,
                data: null,
                error: null,
            };
        case "SUCCESS":
            return {
                loading: false,
                data: action.data,
                error: null,
            };
        case "ERROR":
            return {
                loading: false,
                data: null,
                error: action.error,
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

// 프로필 페이지
const Profile = () => {
    // 상태관리 할 필요가 없지않나..?
    // const [name, setName] = useState("도래미");
    // const [email, setEmail] = useState("familymoments@github.com");
    // const [num, setNum] = useState("8");
    // const [day, setDay] = useState("134");

    // api error handling
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null,
    });

    const fetchUsers = async () => {
        dispatch({ type: "LOADING" });
        try {
            const response = await axios.get(`/users/profile`, { headers });
            dispatch({ type: "SUCCESS", data: response.data.result });
            console.log(response.data.result);
        } catch (e) {
            dispatch({ type: "ERROR", error: e });
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const { loading, data: users, error } = state; // state.data 를 users 키워드로 조회

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
        num: users?.totalUpload,
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
        num: users?.duration,
        color: {
            background: `linear-gradient( to right, #EF88A199, #EF88A1 )`,
        },
        pcolor: {
            color: `#EF88A1`,
        },
    };

    console.log(withDay);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
    return (
        <div className={classes.wrapper}>
            <div className={classes.top}>
                <img
                    className={classes.img}
                    src={users.profileImg}
                    alt="프로필 사진"
                ></img>
                <p className={classes.name}>{users.nickName}</p>
                <p className={classes.email}>{users.email}</p>
            </div>
            <hr className={classes.hr}></hr>
            <div className={classes.bottom}>
                {/* 그냥 하드코딩 하는게 맞는건가... 굳이 단위로 나눌 필요가..? */}
                <Box {...totalNum} />
                <Box {...withDay} />
            </div>
            <hr className={classes.hr}></hr>
            <GoPencil
                className={classes.pen}
                onClick={() => {
                    alert("수정버튼");
                }}
            />
        </div>
    );
};

export default Profile;
