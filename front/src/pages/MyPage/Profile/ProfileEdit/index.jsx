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

    const tagsRef = useRef([]);

    const [formData, setFormData] = useState({
        name: "",
        nickname: "",
        birthdate: "",
    });
    const [profileImg, setProfileImg] = useState(null);
    const [saveImg, setSaveImg] = useState(null);
    // 백에서 이미지 안넘겨도 되게 처리가능 or 파일객체를 넘겨줌 or null값이어도 핸들링처리 중 하나 하면 수정해야함
    const [isChangeImg, setIsChangeImg] = useState(false);
    const [code, setCode] = useState(0);

    useEffect(() => {
        // setProfileImg(???);
        setSaveImg(props.profImg);
        setFormData({
            ...formData,
            name: props.name,
            nickname: props.nickName,
            birthdate: props.birthdate,
        });
    }, [props]);

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     console.log(file)
    //     setProfileImg(file);
    // };
    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];

        // 파일이 선택되었을 때만 처리
        if (selectedFile) {
            const objectURL = URL.createObjectURL(selectedFile);
            console.log(objectURL);
            console.log(selectedFile);

            setSaveImg(objectURL);
            setProfileImg(selectedFile);
            // setIsChangeImg(true);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // FormData 객체 생성
        const formDataObj = new FormData();

        // 이미지 데이터 추가
        formDataObj.append("profileImg", profileImg);

        // JSON 데이터 추가 (PatchProfileReqRes)
        const jsonPayload = {
            name: formData.name,
            nickname: formData.nickname,
            birthdate: formData.birthdate,
        };

        formDataObj.append(
            "PatchProfileReqRes",
            new Blob([JSON.stringify(jsonPayload)], {
                type: "application/json",
            })
        );

        for (const entry of formDataObj.entries()) {
            console.log(entry);
        }

        try {
            // Axios를 사용하여 AJAX 요청 보내기
            const response = await axios.post(
                `${SERVER}/users/edit`,
                formDataObj,
                {
                    headers: {
                        // "Content-Type": "multipart/form-data", // 이미지 업로드에 필요한 Content-Type
                        ...headers,
                    },
                }
            );

            // 서버 응답 처리
            console.log("응답 데이터:", response.data);
            setCode(response.data.code);
        } catch (error) {
            // 오류 처리
            console.error("오류:", error);
        }
    };

    useEffect(() => {
        if (code === 200) {
            props.editHandler();
            window.location.reload();
        }
    }, [code]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRemoveInput = (index) => {
        const targetTag = tagsRef.current[index];
        if (targetTag) {
            setFormData({ ...formData, [targetTag.name]: "" });
        }
    };

    return (
        <div className={classes.wrapper}>
            <form onSubmit={handleSubmit}>
                <div className={classes.top}>
                    <p className={classes.p1}>프로필 편집</p>
                    <img
                        className={classes.img}
                        alt="프로필 사진"
                        src={saveImg}
                    ></img>
                    <label>
                        사진 수정
                        <input
                            type="file"
                            accept=".png, .jpg, .jpeg"
                            onChange={handleImageChange}
                        />
                    </label>
                    {/* <p
                        className={classes.p2}
                        onClick={() => {
                            alert("수정");
                        }}
                    >
                        사진 수정
                    </p> */}
                </div>
                <hr className={classes.hr} />
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
                            value={formData.nickname}
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
                            value={formData.birthdate}
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
                    <Button title="완료" btn={classes.btn2} type="submit" />
                </div>
            </form>
            해당 부분 사진 기본값에 대한 백엔드 처리 필요
            <br/>
            사진 수정 후 api 호출은 잘됌, 사진 변경 안할시에 오류
        </div>
    );

    // const [profImg, setProfImg] = useState("");
    // const [data, setData] = useState({
    //     name: "",
    //     nickname: "",
    //     birthdate: "",
    // });

    // const tagsRef = useRef([]);

    // useEffect(() => {
    //     setProfImg(props.profImg);
    //     setData({
    //         ...data,
    //         name: props.name,
    //         nickname: props.nickName,
    //         birthdate: props.birthdate,
    //     });
    // }, [props]);

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setData({ ...data, [name]: value });
    // };

    // const handleRemoveInput = (index) => {
    //     const targetTag = tagsRef.current[index];
    //     if (targetTag) {
    //         setData({ ...data, [targetTag.name]: "" });
    //     }
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // alert("[modifying] patch 500 error");
    //     // props.editHandler();

    //     // console.log("patch API: ");
    //     sendInfo();
    //     // test();
    // };

    // const test = () => {
    //     const blob = new Blob([JSON.stringify(data)], {
    //         type: "application/json",
    //     });
    //     blob.text().then((text) => {
    //         console.log(text);
    //     });
    // };

    // const sendInfo = () => {
    //     const formData = new FormData(); // FormData 객체를 생성

    //     const jsonData = JSON.stringify(data);

    //     // 이미지 데이터를 추가
    //     formData.append("profileImg", profImg);
    //     formData.append("PatchProfileReqRes", jsonData);

    //     // formData.append(
    //     //     "PatchProfileReqRes",
    //         // new Blob([JSON.stringify(data)], { type: "application/json" })
    //     // );

    //     for (const entry of formData.entries()) {
    //         console.log(entry);
    //     }

    //     console.log(jsonData);

    //     const response = axios.post(`${SERVER}/users/edit`, formData, {
    //         headers,
    //     });
    //     console.log("response:", response.data);
    // };

    // return (
    //     <div className={classes.wrapper}>
    //         <div className={classes.top}>
    //             <p className={classes.p1}>프로필 편집</p>
    //             <img
    //                 className={classes.img}
    //                 alt="프로필 사진"
    //                 src={profImg}
    //             ></img>
    //             <p
    //                 className={classes.p2}
    //                 onClick={() => {
    //                     alert("수정");
    //                 }}
    //             >
    //                 사진 수정
    //             </p>
    //         </div>
    //         <hr className={classes.hr} />
    //         <form action={`${SERVER}/users/edit`} method="post" className={classes.bottom}>
    // <div className={classes.div}>
    //     <label>이름</label>
    //     <div className={classes.box}>
    //         <input
    //             className={classes.input}
    //             type="text"
    //             name="name"
    //             value={data.name}
    //             autoComplete="off"
    //             onChange={handleInputChange}
    //             ref={(el) => (tagsRef.current[0] = el)}
    //         />
    //         <MdCancel
    //             className={classes.cancel}
    //             onClick={() => handleRemoveInput(0)}
    //         />
    //     </div>
    // </div>
    // <div className={classes.div}>
    //     <label>닉네임</label>
    //     <div className={classes.box}>
    //         <input
    //             className={classes.input}
    //             type="text"
    //             name="nickname"
    //             value={data.nickname}
    //             autoComplete="off"
    //             onChange={handleInputChange}
    //             ref={(el) => (tagsRef.current[1] = el)}
    //         />
    //         <MdCancel
    //             className={classes.cancel}
    //             onClick={() => handleRemoveInput(1)}
    //         />
    //     </div>
    // </div>
    // <div className={classes.div}>
    //     <label>생년월일</label>
    //     <div className={classes.box}>
    //         <input
    //             className={classes.input}
    //             type="text"
    //             name="birthdate"
    //             value={data.birthdate}
    //             autoComplete="off"
    //             onChange={handleInputChange}
    //             ref={(el) => (tagsRef.current[2] = el)}
    //         />
    //         <MdCancel
    //             className={classes.cancel}
    //             onClick={() => handleRemoveInput(2)}
    //         />
    //     </div>
    // </div>
    //             <div className={classes.btnWrapper}>
    //                 <Button
    //                     title="취소"
    //                     btn={classes.btn}
    //                     type="button"
    //                     onClick={props.editHandler}
    //                 />
    //                 <Button
    //                     title="완료"
    //                     btn={classes.btn2}
    //                     type="submit"
    //                     // onClick={handleSubmit}
    //                 />
    //             </div>
    //         </form>
    //         {/* <button onClick={handleSubmit}>button</button> */}
    //         {/* <FileUploadButton></FileUploadButton> */}

    //             {/* <form action="/users/edit" method="post">
    //                 <select
    //                     value=""
    //                 >
    //                     <option style={{ display: "none" }} value="" onChange={e => e.target.value = "value"}>
    //                         사진 선택
    //                     </option>
    //                     <option value="gallery">갤러리에서 선택</option>
    //                     <option value="default">기본 이미지로 하기</option>
    //                 </select>
    //                 <input type="submit" />
    //             </form> */}
    //     </div>
    // );
};

export default ProfileEdit;
