import classes from "./Edit.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../../../components/Button";

import { MdCancel } from "react-icons/md";

const ProfileEdit = (props) => {
    const [profImg, setProfImg] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        nickName: "",
        birthDay: "",
    });

    useEffect(() => {
        setProfImg(props.profImg);
    }, [props]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // 폼 데이터를 사용하여 원하는 작업 수행
        // alert("submit");
        console.log(formData);

        props.editHandler();
    };

    return (
        <div className={classes.wrapper}>
            {/* <button onClick={goBack}>뒤로 가기</button> */}
            <div className={classes.top}>
                <p className={classes.p1}>프로필 편집</p>
                <img className={classes.img} alt="프로필 사진" src={profImg}></img>
                <p
                    className={classes.p2}
                    onClick={() => {
                        alert("수정");
                    }}
                >
                    사진 수정
                </p>
            </div>
            <hr className={classes.hr} />
            <form onSubmit={handleSubmit} className={classes.bottom}>
                <div className={classes.div}>
                    <label>이름</label>
                    <div className={classes.box}>
                        <input
                            className={classes.input}
                            type="text"
                            name="name"
                            value={formData.name}
                            autoComplete="off"
                            onChange={handleInputChange}
                        />
                        <MdCancel
                            className={classes.cancel}
                            onClick={() => alert("clear")}
                        />
                    </div>
                </div>
                <div className={classes.div}>
                    <label>닉네임</label>
                    <div className={classes.box}>
                        <input
                            className={classes.input}
                            type="text"
                            name="nickName"
                            value={formData.nickName}
                            autoComplete="off"
                            onChange={handleInputChange}
                        />
                        <MdCancel
                            className={classes.cancel}
                            onClick={() => alert("clear")}
                        />
                    </div>
                </div>
                <div className={classes.div}>
                    <label>생년월일</label>
                    <div className={classes.box}>
                        <input
                            className={classes.input}
                            type="date"
                            name="birthDay"
                            value={formData.birthDay}
                            autoComplete="off"
                            onChange={handleInputChange}
                        />
                        <MdCancel
                            className={classes.cancel}
                            onClick={() => alert("clear")}
                        />
                    </div>
                </div>
                <div className={classes.btnWrapper}>
                    <Button
                        title="취소"
                        btn={classes.btn}
                        type="button"
                        onClick={props.editHandler}
                    />
                    <Button title="완료" btn={classes.btn2} type="submit" />
                </div>
            </form>
        </div>
    );
};

export default ProfileEdit;
