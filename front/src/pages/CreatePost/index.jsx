/**새 글 업로드하는 컴포넌트 */
import styles from "./CreatePost.module.css";
import selectIcon from "../../assets/btn_select_photo.png";
import CreatePostText from "../../components/CreatePostText";
import SelectImg from "../../components/SelectImg";
import Button from "../../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const CreatePost = ()=>{

    const nav=useNavigate();

    // const [state,setState]=useState({
    //     content:"",
    //     imgs:[],
    // });

    const [imgs,setImgs]=useState([]);
    const [content,setContent]=useState("");

//  state값이 바뀔 때마다 state값 변경해주기
    const handleChangeState=(e)=>{
        // setState({
        //     ...state,
        //     [name] : e,
        // })
        setImgs(e);
    };

    // submit 버튼 눌렀을 때 실행되는 함수
    const handleSubmit=(e)=>{
        //Post실행
        
        // state값 전달하며 페이지 이동
        nav("/Main/postlist");
        setImgs([]);
    }


    
     return(
        <div className={styles.wrapper}>
            
            <div className={styles.title}>새 글 업로드</div>
            <SelectImg handleChangeState={handleChangeState}></SelectImg>
   
            <div className={styles.subtitle}>글 작성</div>
            <CreatePostText handleSubmit={handleSubmit} btntitle="순간을 가족에게 공유하기"></CreatePostText>

        </div>
     )
};


export default CreatePost;

