/**
 * props {
 *  color: box의 전체 컬러 -> 그라데이션
 *  sentence: box의 글
 *  pcolor: num의 글자 색
 *  num: 들어갈 숫자 -> 상위에서 state로 관리
 * }
 */

import classes from "./Box.module.css";

const Box =( props )=> {
    return (<div className={classes.box} style={props.color}>
        <div className={classes.stc}>{props.sentence}</div>
        <div className={classes.num} style={props.pcolor}>{props.num}</div>
    </div>);
};

export default Box;