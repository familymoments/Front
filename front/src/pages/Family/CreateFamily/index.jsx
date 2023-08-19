import React, { useEffect, useState } from "react";
import axios from "axios";

import MyText from "../../../components/MyText";
import Button from "../../../components/Button";
import classes from "./CreateFamily.module.css";
import MySearchBar from "../../../components/MySearchBar";
import PersonInfo from "../../../components/PersonInfo";
import Header from '../../../components/Header';

import { useNavigate } from "react-router-dom";
import { recentPosts } from "../../../atom";
import { useRecoilState } from "recoil";

const authToken = "";   //토큰 가져와야 함
const headers = {
    "X-AUTH-TOKEN": authToken,
};

const CreateFamily = () => {
    const nav = useNavigate();
    const [data, setData] = useRecoilState(recentPosts);
    const [searchKeyword, setSearchKeyword] = useState(""); // 검색어 상태

    const handleSearch = () => {
        // 유저 검색을 위한 서버 요청
        axios.get(`http://43.202.90.230/users?keyword=${searchKeyword}`, { headers })
            .then(res => {
                console.log(res.data.result);
                // 최대 5개의 유저만 보여주도록 잘라냄
                const filteredData = Array.isArray(res.data.result)
                ? res.data.result.filter(user => user.status === 1).slice(0, 5)
                : [];
            setData(filteredData);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        if (searchKeyword !== "") {
            // 검색어가 입력되면 실시간으로 검색 요청 보내기
            handleSearch();
        }
    }, [searchKeyword]);

    return (
        <div>
            <Header title="가족" />
            <div className={classes.content3}>
                <MyText text="우리 가족 생성하기" />
            </div>
            <div className={classes.content}>
                <MySearchBar
                    searchbar={classes.searchbar}
                    placeholder="ID 검색"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                />
            </div>
            {data.map(user => (
                <div key={user.Id} className={classes.content2}>
                    <PersonInfo name={user.Id} />
                </div>
            ))}
            <Button
                onClick={() => { nav("/landing/createfamily2"); }}
                btn={classes.btn}
                title="다음 (1/3)" />
        </div>
    );
}

export default CreateFamily;
