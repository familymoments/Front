// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import MyText from "../../../components/MyText";
// import InviteLinkBar from "../../../components/InviteLinkBar";
// import Button from "../../../components/Button";
// import classes from "../CreateFamily/CreateFamily.module.css";
// import Header from '../../../components/Header';
// import styles from "./CreateFamily4.module.css";

// import {useNavigate, useLocation} from "react-router-dom"
// import { header } from "../../../atom";
// import { useRecoilValue } from "recoil";

// const CreateFamily4 = () => {
//     const navigate = useNavigate();

//     const authToken = useRecoilValue(header);
//     const headers = {
//     "X-AUTH-TOKEN": authToken,
//     };

//     const [inviteLink, setInviteLink] = useState(""); // 초대링크 상태 추가

//     const handleInvite = async () => {
//         try {
//             const response = await axios.post("https://family-moments.com/families/family", { headers });
//         //     const inviteCode = response.data.result.inviteCode;
//         //     setInviteLink(`https://family-moments.com/invite/${inviteCode}`);
//         // } catch (error) {
//         //     console.error("Error fetching invite link:", error);
//         if (response.data.isSuccess) {
//             const inviteCode = response.data.result.inviteCode;
//             setInviteLink(inviteCode);
//         } else {
//             console.error("API 호출 오류:", response.data.message);
//         }
//     } catch (error) {
//         console.error("API 호출 오류:", error);
//     }
// };


//     const handleSearchTermChange = (newTerm) => {
//         // 검색어 처리 로직 구현
//         console.log("New search term:", newTerm);
//     };
//     const [searchTerm, setSearchTerm] = useState(""); 

//     const location = useLocation();
//     console.log("location.state:", location.state);
//     const { selectedFamilyName, selectedImage, selectedAlarm } = location.state;
//     // console.log("selectedAlarm in CreateFamily4:", selectedAlarm);



//     const handleCopyLinkClick = () => {
//         // 초대 링크 복사 로직 구현
//     };


//     return (
//         <div>
//             <Header title="가족" />
//             <div className={classes.content3}>
//             <MyText text="가족 초대 링크" />
//             </div>
//             <div className={styles.content}>
//             <InviteLinkBar
//                 onSearchTermChange={handleSearchTermChange}
//                 searchTerm={searchTerm}
//                 inviteLink={inviteLink} // 초대링크 전달
//             />
//             </div>
//             <Button
//                 btn={classes.btn2}
//                 title="초대 링크 복사"
//             />
//             <Button 
//                 // onClick={()=>{navigate("/landing/createfamily")}}
//                 btn={classes.btn} 
//                 title="다음"
//                 onClick={handleInvite}
//             />
//         </div>
//     );
// }

// export default CreateFamily4;

import axios from "axios";
import React, { useEffect, useState } from "react"; 
import MyText from "../../../components/MyText";
import Button from "../../../components/Button";
import classes from "../CreateFamily/CreateFamily.module.css";
import Header from '../../../components/Header';
import styles from "./CreateFamily4.module.css";
import { useRecoilState } from "recoil";
import { header } from "../../../atom";
import {useNavigate, useLocation} from "react-router-dom"


const CreateFamily4 = () => {
    const navigate = useNavigate();
    const SERVER = process.env.REACT_APP_SERVER_URL;
    const [headers, setHeaders] = useRecoilState(header);

    // const handleSearchTermChange = (newTerm) => {
    //     // 검색어 처리 로직 구현
    //     console.log("New search term:", newTerm);
    // };
    // const [searchTerm, setSearchTerm] = useState(""); 

    // const location = useLocation();
    // console.log("location.state:", location.state);
    // const { selectedAlarm } = location.state;
    // console.log("selectedAlarm in CreateFamily4:", selectedAlarm);

    const [url, setUrl] = useState("");

    const getFamily = async () => {
        const response = await axios.post(`${SERVER}/families/5`, { headers });
        console.log(response.data);
        setUrl(response.data.result.inviteCode);
        return response.data;
    };

    useEffect(() => {
        getFamily();
    }, []);

    const handleInputChange = (event) => {
        const { value } = event.target;
        setUrl(value);
    };

    const clipBoard = () => {
        navigator.clipboard.writeText(url);
        alert("클립보드에 복사되었습니다.");
    };

    return (
        <div>
            <Header title="가족" />
        <div className={styles.wrapper}>
            <div>
                <div className={classes.content3}>
                    <MyText text="가족 초대 링크" />
                </div>
                <input
                    className={styles.input}
                    placeholder="가족에 속해있지 않습니다."
                    name="text"
                    type="text"
                    value={url}
                    onChange={handleInputChange}
                ></input>
                    </div>
                        <Button
                        btn={styles.btn2}
                        title="초대 링크 복사"
                        onClick={clipBoard}
                />
                <Button onClick={()=>{navigate("/landing/createfamily")}}
                btn={classes.btn} 
                title="다음"
            />
        </div>
        </div>
    );
};

export default CreateFamily4;