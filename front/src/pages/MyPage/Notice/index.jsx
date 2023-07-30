import classes from "./Notice.module.css";
import Nav from "../../../components/Nav";
import NavAttr from "../../../components/NavAttr";

// 알림 페이지
const Notice = () => {
    return (
        <div className={classes.wrapper}>
            <Nav style={classes.push} title="푸시 알림">
                <NavAttr title="모두 일시 중지" />
                <NavAttr title="게시물" />
                <NavAttr title="댓글" />
            </Nav>
            <Nav title="기타 알림">
                <NavAttr title="Family Moments에서 보내는 알림" />
            </Nav>
        </div>
    );
};

export default Notice;
