import classes from "./Edit.module.css";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Button from "../../../../components/Button";

import { MdCancel } from "react-icons/md";
import FileUploadButton from "../../../../components/FileUpload";
import { useRecoilState } from "recoil";
import { header } from "../../../../atom";

const ProfileEdit = (props) => {
    const SERVER = process.env.REACT_APP_SERVER_URL;
    const [headers, setHeaders] = useRecoilState(header);

    const [profImg, setProfImg] = useState("");
    const [data, setData] = useState({
        name: "",
        nickname: "",
        birthdate: "",
    });

    const tagsRef = useRef([]);

    useEffect(() => {
        setProfImg(props.profImg);
        setData({
            ...data,
            name: props.name,
            nickname: props.nickName,
            birthdate: props.birthdate,
        });
    }, [props]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const handleRemoveInput = (index) => {
        const targetTag = tagsRef.current[index];
        if (targetTag) {
            setData({ ...data, [targetTag.name]: "" });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("[modifying] patch 500 error");
        props.editHandler();

        // console.log("patch API: ");
        // sendInfo();
    };

    const sendInfo = async () => {
        // const formData = new FormData();
        // formData.append("profileImg", profImg);
        // // const blob = new Blob([JSON.stringify(data)], {type: "application/json"})
        // // formData.append("PatchProfileReqRes",blob)
        // formData.append("PatchProfileReqRes", JSON.stringify(data));
        // // console.log(formData.entries());
        // for (const [name, value] of formData.entries()) {
        //     console.log(`${name}:`, value);
        //   }

        // const fd = new FormData();
        // fd.append(
        //     "PatchProfileReqRes",
        //     new Blob([JSON.stringify(data)], { type: "application/json" })
        // );
        // fd.append("profileImg", profImg);

        // const response = await axios.patch("/users", fd, {
        //     headers,
        // });
        // console.log(response.data);
        // return response.data;

        const formData = new FormData();
        formData.append("profileImg", profImg);

        // JSON 데이터 생성
        const jsonData = {
            name: "정유영",
            nickname: "융융융",
            birthdate: "20001217",
        };

        // FormData와 JSON 데이터를 함께 보내기 위해 FormData에 JSON 데이터 추가
        formData.append("PatchProfileReqRes", JSON.stringify(jsonData));

        const body = {
            name: "정유영",
            nickname: "융융융",
            birthdate: "20001217",
            profileImg: profImg,
        };

        console.log('fromData:')
        for (const [name, value] of formData.entries()) {
            console.log(`${name}:`, value);
        }

        console.log("body: ", body)

        // API 요청
        axios
            .patch(`${SERVER}/users`, body, {headers})
            .then((response) => {
                console.log("Patch request successful", response.data);
            })
            .catch((error) => {
                console.error("Error making patch request", error);
            });
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.top}>
                <p className={classes.p1}>프로필 편집</p>
                <img
                    className={classes.img}
                    alt="프로필 사진"
                    src={profImg}
                ></img>
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
            <form className={classes.bottom}>
                <div className={classes.div}>
                    <label>이름</label>
                    <div className={classes.box}>
                        <input
                            className={classes.input}
                            type="text"
                            name="name"
                            value={data.name}
                            autoComplete="off"
                            onChange={handleInputChange}
                            ref={(el) => (tagsRef.current[0] = el)}
                        />
                        <MdCancel
                            className={classes.cancel}
                            onClick={() => handleRemoveInput(0)}
                        />
                    </div>
                </div>
                <div className={classes.div}>
                    <label>닉네임</label>
                    <div className={classes.box}>
                        <input
                            className={classes.input}
                            type="text"
                            name="nickname"
                            value={data.nickname}
                            autoComplete="off"
                            onChange={handleInputChange}
                            ref={(el) => (tagsRef.current[1] = el)}
                        />
                        <MdCancel
                            className={classes.cancel}
                            onClick={() => handleRemoveInput(1)}
                        />
                    </div>
                </div>
                <div className={classes.div}>
                    <label>생년월일</label>
                    <div className={classes.box}>
                        <input
                            className={classes.input}
                            type="text"
                            name="birthdate"
                            value={data.birthdate}
                            autoComplete="off"
                            onChange={handleInputChange}
                            ref={(el) => (tagsRef.current[2] = el)}
                        />
                        <MdCancel
                            className={classes.cancel}
                            onClick={() => handleRemoveInput(2)}
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
                    <Button
                        title="완료"
                        btn={classes.btn2}
                        type="submit"
                        onClick={handleSubmit}
                    />
                </div>
            </form>
            {/* <button onClick={handleSubmit}>button</button> */}
            {/* <FileUploadButton></FileUploadButton> */}
        </div>
    );
};

export default ProfileEdit;
