import React, { useState } from "react"; 
import MyText from "../../../components/MyText";
import InviteLinkBar from "../../../components/InviteLinkBar";
import Button from "../../../components/Button";
import classes from "../../Family/CreateFamily/CreateFamily.module.css";
import styles from "../../Family/CreateFamily4/CreateFamily4.module.css";

import {useNavigate} from "react-router-dom"


const FamilySetting1 = () => {
    const navigate = useNavigate();

    const handleSearchTermChange = (newTerm) => {
        // 검색어 처리 로직 구현
        console.log("New search term:", newTerm);
    };
    const [searchTerm, setSearchTerm] = useState(""); 


    return (
        <div>
            <div className={classes.content3}>
            <MyText text="가족 초대 링크" />
            </div>
            <div className={styles.content}>
            <InviteLinkBar
                onSearchTermChange={handleSearchTermChange}
                searchTerm={searchTerm}
            />
            </div>
            <Button
                btn={classes.btn2}
                title="초대 링크 복사"
            />
            <Button onClick={()=>{navigate("/Main/familysetting2")}}
                btn={classes.btn} 
                title="다음"
            />
        </div>
    );
}

export default FamilySetting1;