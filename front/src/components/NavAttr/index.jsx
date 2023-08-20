/**Nav 본문
 * props {
 *  iconName: 아이콘 선택
 *  title: attr 이름
 *  lnk: 라우팅 링크
 * }
 */

import { Link } from "react-router-dom";
import classes from "./NavAttr.module.css";
import { BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// mui switch 컴포넌트 색상 custom 변경
const custom = createTheme({
    palette: {
        primary: {
            main: "#666666",
        },
    },
});

const NavAttr = (props) => {
    const [loading, setLoading] = useState(false);

    return (
        <div>
            {/* true == mypage용 NavAttr */}
            {/* false == notice용 NavAttr */}
            {props.iconName !== undefined ? (
                <div className={classes.wrapper}>
                    <props.iconName className={classes.icon} />
                    <Link to={props.lnk} className={classes.canclick} onClick={props?.onClick}>
                        <div className={classes.title}>{props.title}</div>
                        <BsChevronRight className={classes.btn} />
                    </Link>
                </div>
            ) : (
                <div className={`${classes.wrapper} ${classes.canclick}`}>
                    <div className={classes.title}>{props.title}</div>
                    {/* mui 라이브러리 toggle버튼 사용 */}
                    <ThemeProvider theme={custom}>
                        <Switch
                            checked={loading}
                            onChange={() => setLoading(!loading)}
                            color="primary"
                            size="small"
                        />
                    </ThemeProvider>
                </div>
            )}
        </div>
    );
};

export default NavAttr;
