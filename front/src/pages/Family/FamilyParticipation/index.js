import React, { useEffect, useState } from "react";
import axios from "axios";

import MyText from "../../../components/MyText";
import Button from "../../../components/Button";
import classes from "../CreateFamily/CreateFamily.module.css";
import MySearchBar from "../../../components/MySearchBar";
import Member from "../../../components/Member";
import styles from "../CreateFamily/CreateFamily.module.css";

import { useRecoilState, useRecoilValue } from "recoil";
import { header, recentPosts } from "../../../atom";
import { useNavigate } from "react-router-dom";

const FamilyParticipation = () => {
    const [inviteLink, setInviteLink] = useState(""); //사용자가 입력해야하는 코드
    const [familyInfo, setFamilyInfo] = useRecoilState(recentPosts);
    const [familyId, setFamilyId] = useState(-1);

    const SERVER = process.env.REACT_APP_SERVER_URL;
    const [headers, setHeaders] = useRecoilState(header);

    const nav = useNavigate();
    // const headers = {
    //     "X-AUTH-TOKEN": authToken,
    //     "Content-Type": "text/plain",
    // };

    const handleParticipate = () => {
        // 초대 링크를 사용하여 가족 정보를 가져오는 서버 요청
        // console.log("초대링크:", inviteLink);
        axios
            .post(`${SERVER}/families/inviteCode`, inviteLink, {
                headers: { ...headers, "Content-Type": "text/plain" },
            })
            .then((res) => {
                console.log("서버 응답데이터:", res);
                if (res.data.isSuccess && res.data.result) {
                    setFamilyInfo(res.data.result);
                    setFamilyId(res.data.result.familyId);
                    console.log("요청에 성공했습니다.");
                } else {
                    console.log("가족이 존재하지 않습니다.");
                    setFamilyId(-1);
                }
            })
            .catch((err) => console.log("에러:", err));
    };

    const joinFamily = async () => {
        const response = await axios.post(
            `${SERVER}/families/${familyId}/insertMember`,
            null,
            { headers }
        );
        console.log(response.data)
        localStorage.setItem('familyID', familyId);

        if (familyId !== -1) {
            nav("/main/postlist")
        }
        // console.log(familyId)

        
    };

    useEffect(() => {
        if (inviteLink !== "") {
            // 검색어가 입력되면 실시간으로 검색 요청 보내기
            handleParticipate();
        } else {
            setFamilyInfo(null); // 검색어가 비어있을 때 가족 정보 초기화
        }
    }, [inviteLink]);

    return (
        <div>
            <div className={classes.content3}>
                <MyText text="우리 가족 참여하기" />
            </div>
            <div className={styles.content}>
                <MySearchBar
                    searchbar={classes.bar}
                    placeholder="초대 링크 입력하기"
                    value={inviteLink}
                    onChange={(e) => setInviteLink(e.target.value)}
                />
            </div>
            {familyInfo ? (
                <div className={styles.content2}>
                    <Member
                        name={familyInfo.familyName}
                        image={familyInfo.representImg}
                    />
                </div>
            ) : null}
            <Button
                onClick={joinFamily}
                btn={classes.btn}
                title="바로 참여하기"
            />
        </div>
    );
};

export default FamilyParticipation;
