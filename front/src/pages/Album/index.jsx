import { useEffect, useState } from "react";
import ImgButton from "../../components/ImgButton";
import classes from "./Album.module.css";

import axios from "axios";
import useAsync from "../../hooks/useAsync";
import AlbumModal from "./AlbumModal";
import { useRecoilState } from "recoil";
import { header } from "../../atom";

const Album = () => {
    const [imgLst, setImgLst] = useState([]);
    const [isModal, setIsModal] = useState(false);
    const [focusImg, setFocusImg] = useState('');
    const [postId, setPostId] = useState();

    const propsModal = {
        focusImg,
        postId,
        setIsModal,
    }

    const SERVER = process.env.REACT_APP_SERVER_URL;
    const [headers, setHeaders] = useRecoilState(header);

    // imgButton 컴포넌트(하위 컴포넌트)에서 사용하는 함수 -> 매개변수도 imgButton 컴포넌트에서 가져옴
    const modalHandler = (selectedImg, selectedId) => {
        setFocusImg(selectedImg)
        setPostId(selectedId)
        
        setIsModal(true);
    };

    const getImgs = async () => {
        const response = await axios.get(`${SERVER}/posts/album?familyId=5`, {headers});
        console.log(response.data)
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
            {isModal && <AlbumModal {...propsModal} />}
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
