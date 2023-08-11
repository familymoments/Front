import classes from "./MyPage.module.css";
import Nav from "../../components/Nav";
import NavAttr from "../../components/NavAttr";
import { FiUser, FiLock, FiBell, FiSettings, FiStar } from "react-icons/fi";
import { TbDoorExit } from "react-icons/tb";

// 마이페이지
const MyPage = () => {
    return (
        <div className={classes.wrapper}>
            <Nav style={classes.header} title="Account">
                <NavAttr iconName={FiUser} title="Profile" lnk="./profile" />
                <NavAttr iconName={FiLock} title="Password" lnk="./pw" />
                <NavAttr iconName={FiBell} title="알림" lnk="./notice" />
                <NavAttr iconName={FiSettings} title="가족 설정" lnk="./setting" />
            </Nav>
            <Nav title="More" style={classes.header}>
                <NavAttr iconName={FiStar} title="Log out" />
                <NavAttr iconName={TbDoorExit} title="계정 탈퇴" />
            </Nav>
        </div>
    );
};

export default MyPage;
