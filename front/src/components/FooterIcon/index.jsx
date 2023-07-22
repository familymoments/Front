import styles from "./FooterIcon.module.css";

import { AiFillHome,AiOutlineHome ,AiOutlineCalendar,AiFillCalendar,AiFillPlusCircle} from 'react-icons/ai';
import { BiPhotoAlbum,BiSolidPhotoAlbum ,BiUser,BiSolidUser} from "react-icons/bi";

const FooterIcon=(props)=>{
    return(
        <div className={styles.wrapper}>
            <props.iconName className={styles.icon} onClick={
                (e)=>{
                    e.preventDefault();
                    props.onClick();
                }
            }/>
            <div className={styles.text}>{props.iconText}</div>
        </div>
    )
}

export default FooterIcon;