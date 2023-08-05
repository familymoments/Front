import { useEffect, useReducer, useState } from "react";
import Post from "../../../components/Post";
import classes from "./Detail.module.css";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useLocation } from "react-router-dom";

import axios from "axios";
import moment from "moment";

const authToken = localStorage.getItem("jwtToken");
// console.log(authToken)

const headers = {
    "X-AUTH-TOKEN": authToken,
};

function reducer(state, action) {
    switch (action.type) {
        case "LOADING":
            return {
                loading: true,
                data: null,
                error: null,
            };
        case "SUCCESS":
            return {
                loading: false,
                data: action.data,
                error: null,
            };
        case "ERROR":
            return {
                loading: false,
                data: null,
                error: action.error,
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const Detail = () => {
    const {state : date} = useLocation();

    const [year, setYear] = useState(date.getFullYear());
    const [month, setMonth] = useState(date.getMonth() + 1);
    const [day, setDay] = useState(date.getDate());
    const [data, setData] = useState([]);

    
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null,
    });

    const fetchList = async () => {
        dispatch({ type: "LOADING" });
        try {
            // api가 특정 일 게시글을 가져오는 링크가 아님
            // /posts/calendar?familyId={가족인덱스}&year={년}&month={월}
            const response = await axios.get(`/posts/calendar?familyId=1&year=${year}&month=${month}&day=${day}`, { headers });
            dispatch({ type: "SUCCESS", data: response.data.result });
            setData(response.data.result)
        } catch (e) {
            dispatch({ type: "ERROR", error: e });
        }
    };

    useEffect(() => {
        fetchList()
    }, [])

    const { loading, data : lists, error } = state; // state.data 를 users 키워드로 조회
    
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!lists) return null;
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <BsChevronLeft className={classes.btn} />
                <div className={classes.date}>{moment(date).format("YYYY.MM.DD")}</div>
                <BsChevronRight className={classes.btn} />
            </div>
            <div>
                <Post postlist={data} />
            </div>
        </div>
    );
};

export default Detail;
