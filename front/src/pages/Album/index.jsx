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
    const [focusImg, setFocusImg] = useState("");
    const [postId, setPostId] = useState();
    const [familyID, setFamilyID] = useState(localStorage.getItem("familyID"));

    // const [lastId, setlastId] = useState();
    let lastId = -1

    const propsModal = {
        focusImg,
        postId,
        setIsModal,
    };

    const SERVER = process.env.REACT_APP_SERVER_URL;
    const [headers, setHeaders] = useRecoilState(header);

    // imgButton 컴포넌트(하위 컴포넌트)에서 사용하는 함수 -> 매개변수도 imgButton 컴포넌트에서 가져옴
    const modalHandler = (selectedImg, selectedId) => {
        setFocusImg(selectedImg);
        setPostId(selectedId);

        setIsModal(true);
    };

    const getImgs = async () => {
        const response = await axios.get(
            `${SERVER}/posts/album?familyId=${familyID}`,
            { headers }
        );
        // console.log("BASIC : ",response.data.result);
        setImgLst([...imgLst, ...response.data.result])
        return response.data.result;
    };

    const getAddImgs = async () => {
        const response = await axios.get(
            `${SERVER}/posts/album?familyId=${familyID}&postId=${lastId}`,
            { headers }
        );
        // console.log("ADD : ",response.data.result);
        setImgLst([...imgLst, ...response.data.result])
        return response.data.result;
    };

    useEffect(() => {
        const fetchData = async () => {
          const imgList1 = await getImgs();
          console.log(imgList1);
          lastId = imgList1[29].postId;
          console.log(lastId);
          const imgList2 = await getAddImgs();
      
          setImgLst([...imgLst, ...imgList1, ...imgList2]);
        };
      
        fetchData();
      }, []);

    // const [state, refetch] = useAsync(getImgs, []);
    // const [state2, refetch2] = useAsync(getAddImgs, [])

    // const { loading, data, error } = state;

    // const albums = data?.result;

    // useEffect(() => {
    //     if (Array.isArray(albums)) {
    //         setImgLst([...imgLst, ...albums]);
    //     }
    //     console.log(imgLst);
    // }, [albums]);

    // if (loading) return <p>loading...</p>;
    // if (error) return <p>error</p>;
    // if (!albums) return <p>No exist data..</p>;

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
