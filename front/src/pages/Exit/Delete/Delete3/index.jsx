import Button from "../../../../components/Button";
import MyText from "../../../../components/MyText";
import classes from "../../SetUp/Setting/Setting.module.css";
import{useNavigate} from "react-router-dom"
import {header} from "../../../../atom";
import { useRecoilValue } from 'recoil';
import axios from 'axios';
const Delete3 = () => {
    const navigate = useNavigate();
    const SERVER = process.env.REACT_APP_SERVER_URL;
    const headers = useRecoilValue(header);
    function deleteFamily(){
    //const familyId
    axios.get(`${SERVER}/families/`,{headers})
    .then(function (res) {
        console.log(res);
        navigate("/landing/newfamily");
    }).catch(function (err) {
       console.log(err);
    });}
    return (
        <div>
            <div className={classes.bold4}>
                <b>정말 우리 가족을 삭제하시겠습니까?</b>
            </div>  
            <Button 
                onClick={deleteFamily}
                btn={classes.btn3} 
                title="삭제하기"
            />
            <Button 
                onClick={()=>{navigate("/main/my")}}
                btn={classes.btn} 
                title="취소"
                />
        </div>
    );
}

export default Delete3;
