import { useEffect, useReducer, useState } from "react";
import Post from "../../../components/Post";
import classes from "./Detail.module.css";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useLocation } from "react-router-dom";

import axios from "axios";
import moment from "moment";
import useAsync from "../../../hooks/useAsync";
import { useRecoilState } from "recoil";
import { header } from "../../../atom";

const Detail = () => {
    const { state: date } = useLocation();

    const [year, setYear] = useState(date.getFullYear());
    const [month, setMonth] = useState(date.getMonth() + 1);
    const [day, setDay] = useState(date.getDate());

    const SERVER = process.env.REACT_APP_SERVER_URL;
    const [headers, setHeaders] = useRecoilState(header);

    const getPosts = async () => {
        const response = await axios.get(
            `${SERVER}/posts/calendar?familyId=5&year=${year}&month=${month}&day=${day}`,
            { headers }
        );
        return response.data;
    };

    const [state, refetch] = useAsync(getPosts, []);

    const { loading, data, error } = state;

    const lists = data?.result;
    // console.log("lists :", lists)

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!lists) return null;
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                {/* <BsChevronLeft className={classes.btn} /> */}
                <div className={classes.date}>
                    {moment(date).format("YYYY.MM.DD")}
                </div>
                {/* <BsChevronRight className={classes.btn} /> */}
            </div>
            <div>
                {lists.map((item) => {
                    return <Post it={item}/>
                })}
            </div>
        </div>
    );
};

export default Detail;
