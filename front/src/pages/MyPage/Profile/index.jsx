import classes from "./Profile.module.css";
import profileImg from "../../../assets/defaultProfile.png";
import { useEffect, useReducer, useState } from "react";
import Box from "../../../components/Box";
import { GoPencil } from "react-icons/go";

import axios from "axios";
import useAsync from "../../../hooks/useAsync";
import { Link } from "react-router-dom";
import ProfileEdit from "./ProfileEdit";
import ProfileMain from "./ProfileMain";

const authToken = localStorage.getItem("token");

// console.log(authToken)

const headers = {
    "X-AUTH-TOKEN": authToken,
};

// 프로필 페이지
const Profile = () => {
    const [isEdit, setIsEdit] = useState(false);
    // 상태관리 할 필요가 없지않나..?
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [profImg, setProfImg] = useState("");
    const [num, setNum] = useState();
    const [day, setDay] = useState();

    // api로 토큰 불러오는 코드
    const loginData = {
        id: "familya1",
        password: "yung1234",
    };
    const fetchLogin = async () => {
        const response = await axios.post("/users/log-in", loginData);
        const token = response.headers.get("x-auth-token");

        return token;
    };
    useEffect(() => {
        fetchLogin().then((res) => localStorage.setItem("token", res));
    }, []);

    const editHandler = () => {
        setIsEdit(!isEdit);
    };

    const getUsers = async () => {
        const response = await axios.get(`/users/profile?familyId=5`, {
            headers,
        });
        return response.data;
    };

    const [state, refetch] = useAsync(getUsers, []);

    const { loading, data, error } = state; // state.data 를 users 키워드로 조회

    const users = data?.result;

    useEffect(() => {
        setName(users?.nickName);
        setEmail(users?.email);
        setProfImg(users?.profileImg);
        setNum(users?.totalUpload);
        setDay(users?.duration);

        // console.log(users);
    }, [users]);

    const user = {
        name,
        email,
        profImg,
        num,
        day,
    };

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    // if (!users) return <p>No Exist User.</p>;
    return (
        <div>
            {isEdit ? (
                <ProfileEdit {...user} editHandler={editHandler} />
            ) : (
                <ProfileMain {...user} editHandler={editHandler} />
            )}
        </div>
    );
};

export default Profile;
