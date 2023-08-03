import Styles from "./BubbleButton.module.css";
import { useNavigate } from "react-router-dom";
//props.location = 페이지 이동
//props.type = 색 정하기
//props.text = 버튼 안의 글 내용

function BubbleButton(props){
    
    const navigate = useNavigate();

    return(
    <div>
        <button onClick={()=>{navigate(props.location)}}
            className={`${Styles.button}
                ${props.layout}
                ${props.type === "pink" ? Styles.button1 : ''}
                ${props.type === "purple" ? Styles.button2 : ''}
                ${props.type === "blue" ? Styles.button3 : ''}
               
            `}>
                <p className={Styles.text}>{props.text}</p>
                </button>
    </div>)
}

export default BubbleButton;