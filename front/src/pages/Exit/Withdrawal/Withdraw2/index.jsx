import React, { useState } from "react";
import Button from "../../../../components/Button";
import MyText from "../../../../components/MyText";
import styles from "./Withdraw2.module.css";
import InviteLinkBar from "../../../../components/InviteLinkBar";
import{useNavigate} from "react-router-dom"


const Withdraw2 = () => {
    const navigate = useNavigate();
    const [currentPassword, setCurrentPassword] = useState(""); // 추가: 상태 관리

    const handlePasswordChange = (newPassword) => {
      setCurrentPassword(newPassword); // 비밀번호 상태 업데이트
    };

    return (
        <div>
            <div className={styles.content1}>
            <MyText text={
            <>
                계속 진행하려면 보안을 위해<br/>
                현재 비밀번호를 입력해주세요.<br/><br/>
            </>
            } />
            </div>  
            <div className={styles.bar}>
            <InviteLinkBar 
                placeholder="현재 비밀번호" 
                style={{ fontSize: "13px" }}
                onSearchTermChange={handlePasswordChange} // 상태 업데이트 함수 전달
                searchTerm={currentPassword} // 현재 비밀번호 상태 전달
                />  
            </div>        
            <Button 
                onClick={()=>{navigate("/Main/withdraw3")}}
                btn={styles.btn} 
                title="계속하기"
            />
        </div>
    );
}

export default Withdraw2;
