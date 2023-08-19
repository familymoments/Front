import React, { useState } from "react";
import axios from "axios";

import MyText from "../../../components/MyText";
import Button from "../../../components/Button";
import classes from "../CreateFamily/CreateFamily.module.css";
import MySearchBar from '../../../components/MySearchBar';
import Member from "../../../components/Member";
import styles from "../CreateFamily/CreateFamily.module.css";

const FamilyParticipation = () => {
    const [inviteLink, setInviteLink] = useState("");//사용자가 입력해야하는 코드
    const [familyInfo, setFamilyInfo] = useState(null);

    const authToken="eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTE2Njg4OTUsInN1YiI6ImFjY2Vzcy10b2tlbiIsInV1aWQiOiIwMWVlMzVhZS05NTE2LTExY2EtOGU2OC1jNTk3YzM1NmU1MmQiLCJpYXQiOjE2OTE2Njg4MzV9.dmCGMzZqiQK8-JFnyrqL85u8_Vs9c7hJq_BmkVL88ME";


    const headers = {
    "X-AUTH-TOKEN": authToken,
};



    const handleParticipate = () => {
        // 초대 링크를 사용하여 가족 정보를 가져오는 서버 요청
        console.log(inviteLink);
        axios.post('/families/inviteCode', {inviteCode: inviteLink} ,{ headers })
            .then(res => {
                if (res.data.isSuccess && res.data.result) {
                    setFamilyInfo(res.data.result);
                    console.log("요청에 성공했습니다.");
                } else {
                    console.log("가족이 존재하지 않습니다.");
                }
            })
            .catch(err => console.log(err));
    };

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
                    <Member name={familyInfo.familyName} />
                </div>
            ) : null}
            <Button onClick={handleParticipate} btn={classes.btn} title="바로 참여하기" />
        </div>
    );
}

export default FamilyParticipation;