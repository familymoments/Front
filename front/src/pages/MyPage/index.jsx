import classes from "./MyPage.module.css";
import Nav from "../../components/Nav";
import NavAttr from "../../components/NavAttr";
import { FiUser, FiLock, FiBell, FiSettings, FiStar } from "react-icons/fi";
import { TbDoorExit } from "react-icons/tb";

import { useState } from "react";
import LogoutModal from "./LogoutModal";

// 마이페이지
const MyPage = () => {
    const [isModal, setIsModal] = useState(false);

    const modalHandler = () => {
        setIsModal(!isModal)
    }

    return (
        <div className={classes.wrapper}>
            <Nav style={classes.header} title="Account">
                <NavAttr iconName={FiUser} title="Profile" lnk="./profile" />
                <NavAttr iconName={FiLock} title="Password" lnk="./pwchange" />
                <NavAttr iconName={FiBell} title="알림" lnk="./notice" />
                <NavAttr iconName={FiSettings} title="가족 설정" lnk="./setting" />
            </Nav>
            <Nav title="More" style={classes.header}>
                <NavAttr iconName={FiStar} title="Log out" onClick={modalHandler} />
                <NavAttr iconName={TbDoorExit} title="계정 탈퇴" lnk="./resign" />
            </Nav>
            {isModal && <LogoutModal setIsModal={setIsModal}/>}
        </div>
    );
};

export default MyPage;
