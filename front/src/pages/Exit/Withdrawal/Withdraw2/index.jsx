import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import MyText from "../../../../components/MyText";
import classes from "./Withdraw2.module.css";
import InviteLinkBar from "../../../../components/InviteLinkBar";
import{useNavigate} from "react-router-dom"
import { useRecoilState } from "recoil";
import { header } from "../../../../atom";


const Withdraw2 = () => {
    const SERVER = process.env.REACT_APP_SERVER_URL;
    const [headers, setHeaders] = useRecoilState(header);

    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [code, setCode] = useState(0);
    const [message, setMessage] = useState("");

    const params = { password: password };

    const fetchPW = async () => {
        const response = await axios.post(
            `${SERVER}/users/auth/compare-pwd`,
            params,
            { headers }
        );
        console.log(response.data);
        setCode(response.data.code);
        setMessage(response.data.message);
        return response.data;
    };

    const handleInputChange = (event) => {
        const { value } = event.target;
        setPassword(value);
    };

    const continueHandler = () => {
        console.log("password : ", password);
        fetchPW();
    };

    useEffect(() => {
        if (code === 200) {
            navigate("../check")
            console.log("success")
        }
    }, [code]);


    // const [currentPassword, setCurrentPassword] = useState(""); // 추가: 상태 관리

    // const handlePasswordChange = (newPassword) => {
    //   setCurrentPassword(newPassword); // 비밀번호 상태 업데이트
    // };

    // return (
    //     <div>
    //         <div className={styles.content1}>
    //         <MyText text={
    //         <>
    //             계속 진행하려면 보안을 위해<br/>
    //             현재 비밀번호를 입력해주세요.<br/><br/>
    //         </>
    //         } />
    //         </div>  
    //         <div className={styles.bar}>
    //         <InviteLinkBar 
    //             placeholder="현재 비밀번호" 
    //             style={{ fontSize: "13px" }}
    //             onSearchTermChange={handlePasswordChange} // 상태 업데이트 함수 전달
    //             searchTerm={currentPassword} // 현재 비밀번호 상태 전달
    //             />  
    //         </div>        
    //         <Button 
    //             onClick={()=>{navigate("/Main/withdraw3")}}
    //             btn={styles.btn} 
    //             title="계속하기"
    //         />
    //     </div>
    // );
    return (
        <div className={classes.wrapper}>
            <div className={classes.div}>
                <p className={classes.p}>
                    계속 진행하려면 보안을 위해
                    <br />
                    현재 비밀번호를 입력해주세요.
                </p>
                <input
                    className={classes.input}
                    placeholder="현재 비밀번호"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleInputChange}
                ></input>
                {code !== 200 && <p className={classes.errorText}>{message}</p>}
                <Button
                    title="계속하기"
                    btn={classes.btn}
                    onClick={continueHandler}
                />
            </div>
        </div>
    );
}

export default Withdraw2;
