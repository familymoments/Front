import Nav from "../../../components/Nav";
import NavAttr from "../../../components/NavAttr";
import classes from "./Set.module.css";
import { FiUser, FiLock, FiBell, FiSettings, FiStar } from "react-icons/fi";
import { TbDoorExit } from "react-icons/tb";

const Set = () => {
    return (
        <div className={classes.wrapper}>
            <p className={classes.p}>가족 설정</p>
            <NavAttr iconName={FiUser} title="가족 초대 링크" lnk="../familysetting1" />
            <NavAttr iconName={FiLock} title="가족 추가하기" lnk="../add" />
            <NavAttr iconName={FiBell} title="업로드 주기 변경" lnk="../familysetting2" />
            <NavAttr iconName={FiSettings} title="가족 권한 넘기기" lnk="../authority" />
            <NavAttr iconName={FiStar} title="가족 강퇴시키기" lnk="../setting" />
            <NavAttr iconName={TbDoorExit} title="가족 탈퇴하기" lnk="../withdraw4" />
            <NavAttr iconName={TbDoorExit} title="가족 삭제하기" lnk="../delete1" style={classes.delete} />
        </div>
    );
};

export default Set;
