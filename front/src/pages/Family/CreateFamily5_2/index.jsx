import Union from "../../../components/Union";
import Footer from '../../../components/Footer';
import mediaImage from "../../../assets/media_image.jpg";
import pStyle from "./CreateFamily5_2.module.css";
import Button from "../../../components/Button";
import classes from "../CreateFamily/CreateFamily.module.css";
import HelloText2 from "../../../components/HelloText2";

import{useNavigate} from "react-router-dom"

const CreateFamily5_2 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <HelloText2 user="융" customText="지금 바로 Family Moments를 시작해보세요!" />
            <Union bubble={pStyle.bubble} message="가족 생성ㆍ참여하려면 여기를 클릭해주세요"/>
            <img src = {mediaImage} alt="media image" className = {pStyle.imageStyle}/>
            <p className={pStyle.pText}>순간을 공유하기 전에<br />가족 생성 혹은 가족 참여를 해주세요!</p>
            <Footer />
            <Button 
            onClick={()=>{navigate("/landing/nexttime")}}
            btn={classes.btn} 
            title="지금 시작하기"/>
        </div>
    );
}

export default CreateFamily5_2;
