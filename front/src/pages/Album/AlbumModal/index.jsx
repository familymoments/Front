import classes from "./AlbumModal.module.css";
import logo from "../../../assets/FamilyMoments2.png";
import axios from "axios";
import useAsync from "../../../hooks/useAsync";

import "./slider.css";

import Carousel from "nuka-carousel";
import { useRecoilState } from "recoil";
import { header } from "../../../atom";

import {IoMdClose} from "react-icons/io"


const AlbumModal = (props) => {
    const SERVER = process.env.REACT_APP_SERVER_URL;
    const [headers, setHeaders] = useRecoilState(header);

    const getImgs = async () => {
        const response = await axios.get(`${SERVER}/posts/album/${props.postId}`, {
            headers,
        });
        return response.data;
    };

    const [state, refetch] = useAsync(getImgs, []);

    const { loading, data, error } = state;

    const albums = data?.result;

    return (
        <div className={classes.wrapper}>
            <div
                className={`${classes.backdrop}`}
                onClick={() => props.setIsModal(false)}
            ></div>
            <div className={classes.modalWrapper}>
                <IoMdClose
                    className={classes.close}
                    onClick={() => props.setIsModal(false)}
                ></IoMdClose>
                <Carousel renderCenterLeftControls renderCenterRightControls>
                    {albums &&
                        albums.map((item, idx) => {
                            return (
                                <img
                                    key={idx}
                                    src={item}
                                    className={`${classes.img}`}
                                ></img>
                            );
                        })}
                    {/* carousel 확인용 데이터 */}
                    {/* <img
                        src={props.focusImg}
                        className={`${classes.img}`}
                    ></img>
                    <img
                        src={props.focusImg}
                        className={`${classes.img}`}
                    ></img>
                    <img
                        src={props.focusImg}
                        className={`${classes.img}`}
                    ></img> */}
                </Carousel>
                <img src={logo} alt="F.M로고이미지" className={classes.logo} />
            </div>
        </div>
    );
};

export default AlbumModal;
