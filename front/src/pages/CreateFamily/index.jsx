import MyText from "../../components/MyText";
import Button from "../../components/Button";
import classes from "./CreateFamily.module.css";
import MySearchBar from "../../components/MySearchBar"
import PersonInfo from "../../components/PersonInfo"
import Header from '../../components/Header';

const CreateFamily = () => {
    return (
        <div>
            <Header title="가족" />
            
                <MyText text="우리 가족 생성하기" />
                <div className={classes.content}>
                <MySearchBar searchbar={classes.searchbar} placeholder="ID 검색" />
                </div>
                <div className={classes.content2}>
                <PersonInfo person={classes.person} name="clohee" />
                </div>

            <Button 
                location ="/landing/createfamily2"
                btn={classes.btn} 
                title="다음 (1/3)"/>
        </div>
    );
}

export default CreateFamily;
