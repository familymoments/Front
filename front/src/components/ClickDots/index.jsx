import styles from "./index.module.css";



const ClickDots =({onClickOutside})=>{

    return(
       <div className={styles.wrapper}>
            <div className={styles.bottomLine}>수정하기</div>
            <div className={styles.bottomLine}>신고하기</div>
            <div className={styles.ele}>삭제하기</div>
       </div>
            
    )

};

export default ClickDots;