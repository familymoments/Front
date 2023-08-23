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
import { useRecoilState } from "recoil";
import { header } from "../../../atom";

// 프로필 페이지
const Profile = () => {
    const [isEdit, setIsEdit] = useState(false);
    // 상태관리 할 필요가 없지않나..?
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [profImg, setProfImg] = useState("");
    const [nickName, setNickName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [num, setNum] = useState();
    const [day, setDay] = useState();
    const [familyID, setFamilyID] = useState(localStorage.getItem("familyID"));

    const SERVER = process.env.REACT_APP_SERVER_URL;
    const [headers, setHeaders] = useRecoilState(header);

    const editHandler = () => {
        setIsEdit(!isEdit);
    };

    const getUsers = async () => {
        const response = await axios.get(`${SERVER}/users/profile?familyId=${familyID}`, {
            headers,
        });
        return response.data;
    };

    const [state, refetch] = useAsync(getUsers, []);

    const { loading, data, error } = state; // state.data 를 users 키워드로 조회

    const users = data?.result;

    useEffect(() => {
        setName(users?.name);
        setEmail(users?.email);
        setProfImg(users?.profileImg);
        setNickName(users?.nickName);
        setBirthDate(users?.birthDate);
        setNum(users?.totalUpload);
        setDay(users?.duration);
    }, [users]);

    const user = {
        name,
        email,
        profImg,
        nickName,
        birthdate: birthDate,
        num,
        day,
    };

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return <p>No Exist User.</p>;
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
