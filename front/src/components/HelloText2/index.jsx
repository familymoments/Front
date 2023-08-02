/**홈 화면에서 user에게 건네는 인사와 일수를 나타내는 컴포넌트
 * 
 * props: user="" Dday=
 * user이름과 디데이
 */

import styles from "./HelloText2.module.css";

const HelloText2 =(props)=>{

    return (
        <div className={styles.wrapper}>
            <div className={styles.firstline}>{props.user} 님, 반갑습니다.</div>
            <div className={styles.customText}>{props.customText}</div>
            <div className={styles.line}></div>
        </div>
    )
};

export default HelloText2;