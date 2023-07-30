import classes from "./Profile.module.css";
import profileImg from "../../../assets/defaultProfile.png";
import { useState } from "react";
import Box from "../../../components/Box";
import { GoPencil } from "react-icons/go";

// 프로필 페이지
const Profile = () => {
    // 백에서 가져올것들 + 이미지도
    const [name, setName] = useState("도래미");
    const [email, setEmail] = useState("familymoments@github.com");
    const [num, setNum] = useState("8");
    const [day, setDay] = useState("134");

    
    const totalNum = {
        // jsx를 바로 넘기면 되네용
        sentence: (
            <p>
                Total
                <br />
                Upload
            </p>
        ),
        num: num,
        color: {
            background: `linear-gradient( to right, #9378FF99, #9378FF )`,
        },
        pcolor: {
            color: `#9378FF`,
        },
    };

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
                    src={profileImg}
                    alt="프로필 사진"
                ></img>
                <p className={classes.name}>{name}</p>
                <p className={classes.email}>{email}</p>
            </div>
            <hr className={classes.hr}></hr>
            <div className={classes.bottom}>
                {/* 그냥 하드코딩 하는게 맞는건가... 굳이 단위로 나눌 필요가..? */}
                <Box {...totalNum} />
                <Box {...withDay} />
            </div>
            <hr className={classes.hr}></hr>
            <GoPencil className={classes.pen} onClick={() => {alert("수정버튼")}} />
        </div>
    );
};

export default Profile;
