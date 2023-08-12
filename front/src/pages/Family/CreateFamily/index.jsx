import Button from "../../../components/Button";
import Header from "../../../components/Header";
import MySearchBar from "../../../components/MySearchBar";
import MyText from "../../../components/MyText";
import classes from "./CreateFamily.module.css";
import PersonInfo from "../../../components/PersonInfo";

import{useNavigate} from "react-router-dom"


const CreateFamily = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header title="가족" />
                <div className={classes.content3}>
                    <MyText text="우리 가족 생성하기" />
                </div>
                <div className={classes.content}>
                    <MySearchBar searchbar={classes.searchbar} placeholder="ID 검색" />
                </div>
                <div className={classes.content2}>
                    <PersonInfo name="clohee" />
                </div>
            <Button 
                onClick={()=>{navigate("/landing/createfamily2")}}
                btn={classes.btn} 
                title="다음 (1/3)"/>
        </div>
    );
}

export default CreateFamily;
