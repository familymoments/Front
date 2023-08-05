import { useEffect, useState } from "react";
import ImgButton from "../../components/ImgButton";
import classes from "./Album.module.css";

import axios from "axios";

const authToken = localStorage.getItem("jwtToken");
// console.log(authToken)

const headers = {
    "X-AUTH-TOKEN": authToken,
};

const Album = () => {
    const [imgLst, setImgLst] = useState([]);

    // 아직 백api 구현 안됌
    // const fetchAlbum = async () => {
    //     const response = await axios.get(`/posts/album?familyId=1`, { headers });
    //     console.log(response)
    //     return response
    // }

    useEffect(() => {
        // fetchAlbum()
        setImgLst([
            {
                id: 1,
                lnk: "https://images.pexels.com/photos/7473282/pexels-photo-7473282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            {
                id: 2,
                lnk: "https://images.pexels.com/photos/2604639/pexels-photo-2604639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            {
                id: 3,
                lnk: "https://images.pexels.com/photos/2957862/pexels-photo-2957862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            {
                id: 4,
                lnk: "https://images.pexels.com/photos/8264573/pexels-photo-8264573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            },
            ...imgLst,
        ]);
    }, []);

    // console.log(imgLst)

    return (
        <div className={classes.wrapper}>
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
                    return <ImgButton key={idx} {...item} />;
                })}
            </div>
        </div>
    );
};

export default Album;
