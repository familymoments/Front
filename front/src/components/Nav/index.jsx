/**
 * props {
 *  style: 추가적으로 css 적용해야 할 부분 적용
 *  title: 제목
 *  children: 하위 부분 자동 할당
 * }
 */

import classes from "./Nav.module.css";

const Nav = props => {
    return (
        <div className={props.style}>
            <div className={classes.navHeader}>{props.title}</div>
            {props.children}
        </div>
    );
};

export default Nav;