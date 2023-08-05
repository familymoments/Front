import { Link } from 'react-router-dom';
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
            <MySearchBar placeholder="ID 검색" />
            <PersonInfo name="clohee" />
            <Link to="../landing/createfamily2">
            <Button btn={classes.btn} title="다음 (1/3)"/>
            </Link>
        </div>
    );
}

export default CreateFamily;
