import Button from "../../../components/Button";
import MySearchBar from "../../../components/MySearchBar";
import MyText from "../../../components/MyText";
import classes from "../../Family/CreateFamily/CreateFamily.module.css";
import styles from "./Add.module.css";
import PersonInfo from "../../../components/PersonInfo";

import{useNavigate} from "react-router-dom"

const Add = (props) => {
    const navigate = useNavigate();
    return (
        <div>
                <div className={styles.content3}>
                    <MyText text="우리 가족 추가하기" />
                </div>
                <div className={styles.content}>
                    <MySearchBar searchbar={classes.searchbar} placeholder="ID 검색" />
                </div>
                <div className={styles.content2}>
                    <PersonInfo name="clohee" />
                </div>
            <Button 
                onClick={()=>{navigate("/Main/withdraw4")}}
                btn={classes.btn} 
                title="초대하기"/>
        </div>
    );
}

export default Add;
