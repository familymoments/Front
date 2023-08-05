import React, { Children, useEffect, useReducer, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import classes from "./MyCalendar.module.css";
import "./Calendar.css";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const authToken = localStorage.getItem("jwtToken");

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

const FECalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [year, setYear] = useState(selectedDate.getFullYear());
    const [month, setMonth] = useState(selectedDate.getMonth() + 1);
    const [mark, setMark] = useState([]);
    const [holiday, setHoliday] = useState([]);
    const customWeekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    const nav = useNavigate();

    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null,
    });

    const fetchList = async () => {
        dispatch({ type: "LOADING" });
        try {
            const response = await axios.get(
                `/posts/calendar?familyId=1&year=${year}&month=${month}`,
                { headers }
            );
            dispatch({ type: "SUCCESS", data: response.data.result });
            setMark(response.data.result);
            console.log(response.data.result);
        } catch (e) {
            dispatch({ type: "ERROR", error: e });
        }
    };

    const url = (y, m) => {
        const mon = m < 9 ? `0${m}` : m;
        console.log(`${y}, ${mon}`);

        //api 키 .env파일에 local로 처리해야함
        return `url + API_KEY`;
    };

    const holidayfetchList = async () => {
        const u = url(year, month);
        console.log(u);

        dispatch({ type: "LOADING" });
        try {
            const res = await axios.get(u);
            console.log(res.data);
        } catch (e) {
            dispatch({ type: "ERROR", error: e });
        }
        const res = await axios.get(u);
        console.log(res.data);
    };

    // 예시 날짜
    useEffect(() => {
        fetchList();
        // holidayfetchList();
    }, [year, month]);

    const dateChangeHandler = (date) => {
        setSelectedDate(date);

        // mark가 없는, 즉 게시물이 해당 달에 아무것도 없는경우 mark안의 property가 undefined인데
        if (mark?.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            nav("./detail", { state: date });
        }
    };

    // navigationLabel에 보일 내용 format 하는 함수
    const formatLongDate = ({ date, label, locale, view }) => {
        const year = date.getFullYear();
        const m = date.getMonth();
        const month = m < 9 ? `0${m + 1}` : m + 1;
        return `${year}.${month}`;
    };

    // weekday 연결하는 함수
    const formatWeekDay = (locale, date) => {
        const dayIndex = date.getDay();
        return customWeekdays[dayIndex];
    };

    // 주말인지 확인하는 함수
    const isWeekend = (date) => {
        const day = date.getDay();
        return day === 0; // 0: 일요일
    };

    // 공휴일인지 확인하는 함수
    const isHoliday = (date) => {
        // 아래는 단순히 예시로 "2023-08-15"를 공휴일로 설정한 예시입니다.
        // api 가져와서 연동해야함
        return moment(date).format("YYYY-MM-DD") === "2023-08-15";
    };

    // 각 날짜에 대한 클래스 이름을 반환하는 함수
    const tileClassName = ({ date }) => {
        if (isHoliday(date) || isWeekend(date)) {
            return "redText";
        }
        return null;
    };

    // prev, next버튼 action시 년, 월 재설정해주는 함수
    const ymChangeHandler = ({ activeStartDate: date }) => {
        setYear(date.getFullYear());
        setMonth(date.getMonth() + 1);
    };

    const { loading, data: users, error } = state; // state.data 를 users 키워드로 조회

    // loading을 이렇게 처리하지말고 원형으로 빙글 돌아가는 거로 처리하기!!!!!!!!!!!!!!!!!
    // if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    // if (!users) return null;
    return (
        <div className={classes.wrapper}>
            <Calendar
                onChange={dateChangeHandler} // Callback function when date is selected
                value={selectedDate} // Selected date (controlled component)
                formatDay={(locale, date) => moment(date).format("DD")}
                className={classes.myCalendar}
                next2Label={null}
                prev2Label={null}
                onActiveStartDateChange={ymChangeHandler}
                showNeighboringMonth={null}
                navigationLabel={formatLongDate}
                formatShortWeekday={formatWeekDay}
                tileClassName={tileClassName}
                tileContent={({ date, view }) => {
                    // mark가 없을경우 옵셔널체이닝으로 에러 처리
                    if (
                        mark?.find(
                            (x) => x === moment(date).format("YYYY-MM-DD")
                        )
                    ) {
                        return (
                            <div className={classes.wrapper}>
                                <div className={classes.dot}></div>
                            </div>
                        );
                    }
                }}
            />
            {/* <button onClick={holidayfetchList}>api 주세요</button> */}
        </div>
    );
};

export default FECalendar;
