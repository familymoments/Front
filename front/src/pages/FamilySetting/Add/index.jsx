import React, { useEffect, useState } from "react";
import axios from "axios";

import Button from "../../../components/Button";
import MySearchBar from "../../../components/MySearchBar";
import MyText from "../../../components/MyText";
import classes from "../../Family/CreateFamily/CreateFamily.module.css";
import styles from "./Add.module.css";
import PersonInfo from "../../../components/PersonInfo";

import { useNavigate } from "react-router-dom";
import { header, recentPosts } from "../../../atom";
import { useRecoilState, useRecoilValue } from "recoil";

const Add = () => {
    const navigate = useNavigate();

    const [data, setData] = useRecoilState(recentPosts);
    const [searchKeyword, setSearchKeyword] = useState(""); // 검색어 상태

    const [selectedId] = useState("kk25"); // 아이디 값 설정

    const [selectedUserId, setSelectedUserId] = useState();
    const [selectedImage, setSelectedImage] = useState();

    const handleNextClick = async () => {
        await navigate("/Main/my/set", {
            state: {
                selectedUserId: selectedUserId,
                selectedImage: selectedImage,
                selectedId: selectedId,    // 선택한 아이디 전달
            },
        });
    };

    const authToken = useRecoilValue(header);
    const headers = {
        "X-AUTH-TOKEN": authToken,
    };

    const handlePersonInfoClick = (userId, userImage) => {
        setSelectedUserId(userId);
        setSelectedImage(userImage);
    };

    const handleSearch = () => {
        const url = `https://familymoments-be.site/families/5?userIds=molly12`;
        axios
            .post(url, null, { headers })
            .then((res) => {
                console.log(res.data);
                const filteredData = Array.isArray(res.data.result)
                    ? res.data.result.filter((user) => user.status === 1).slice(0, 5)
                    : [];
                setData(filteredData);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        if (searchKeyword !== "") {
            // 검색어가 입력되면 실시간으로 검색 요청 보내기
            handleSearch();
        }
    }, [searchKeyword]);

    const handleSearchInputChange = (e) => {
        setSearchKeyword(e.target.value);
    };

    const handleSearchSubmit = () => {
        handleSearch();
    };
    
    return (
        <div>
            <div className={styles.content3}>
                <MyText text="우리 가족 추가하기" />
            </div>
            <div className={styles.content}>
                <MySearchBar
                    searchbar={classes.searchbar}
                    placeholder="ID 검색"
                    value={searchKeyword}
                    onChange={handleSearchInputChange}
                    onSubmit={handleSearchSubmit}
                />
            </div>
            <div className={styles.content2}>
                {data.map((user) => (
                    <PersonInfo
                        onCheckIconClick={handlePersonInfoClick}
                        key={user.id}
                        name={user.id}
                        image={user.profileImg}
                        onClick={() => handlePersonInfoClick(user.id, user.profileImg)}
                    />
                ))}
            </div>
            <Button onClick={handleNextClick} btn={classes.btn} title="초대하기" />
        </div>
    );
};

export default Add;
