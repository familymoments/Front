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