import { useEffect, useState } from "react";
import ImgButton from "../../components/ImgButton";
import classes from "./Album.module.css";

import axios from "axios";
import useAsync from "../../hooks/useAsync";

const authToken = localStorage.getItem("jwtToken");
// console.log(authToken)

const headers = {
    "X-AUTH-TOKEN": authToken,
};

const Album = () => {
    const [imgLst, setImgLst] = useState([]);
    const [isModal, setIsModal] = useState(false);
    const [focusImg, setFocusImg] = useState('');

    // imgButton 컴포넌트(하위 컴포넌트)에서 사용하는 함수 -> 매개변수도 imgButton 컴포넌트에서 가져옴
    const modalHandler = (selectedImg) => {
        setFocusImg(selectedImg)

        setIsModal(true);
    };

    const getImgs = async () => {
        const response = await axios.get(`/posts/album?familyId=5`);
        return response.data;
    };

    const [state, refetch] = useAsync(getImgs, []);

    const { loading, data, error } = state;

    const albums = data?.result;

    useEffect(() => {
        if (Array.isArray(albums)) {
            setImgLst([...albums]);
        }
        console.log(imgLst);
    }, [albums]);

    if (loading) return <p>loading...</p>;
    if (error) return <p>error</p>;
    if (!albums) return <p>No exist data..</p>;

    return (
        <div className={classes.wrapper}>
            {isModal && (
                <div
                    className={`${classes.backdrop}`}
                    onClick={() => setIsModal(false)}
                ></div>
            )}
            {isModal && (
                <img
                    src={focusImg}
                    className={`${classes.modal} ${
                        isModal ? classes.show : ""
                    }`}
                ></img>
            )}
            <hr className={classes.hr} />
            <div className={classes.dotWrapper}>
                <div className={classes.dot}></div>
                <div className={classes.dot}></div>
                <div className={classes.dot}></div>
                <div className={classes.dot}></div>
                <div className={classes.dot}></div>
            </div>
            <div className={classes.bodyWrapper}>
                {imgLst.map((item, idx) => {
                    return (
                        <ImgButton
                            key={idx}
                            {...item}
                            modalValue={modalHandler}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Album;
