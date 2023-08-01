import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import classes from "./MyCalendar.module.css";
import "./Calendar.css";
import moment from "moment";

const FECalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [mark, setMark] = useState([]);
    const customWeekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    // 예시 날짜
    useEffect(() => {
        setMark(["2023-08-01", "2023-08-22", "2023-08-29"]);
    }, []);
    console.log(mark);

    // 백에서 게시글 있는 날짜를 담아옴
    // const { data } = useQuery(
    //     ["logDate", month],
    //     async () => {
    //         const result = await axios.get(
    //             `/api/...`
    //         );
    //         return result.data;
    //     },
    //     {
    //         onSuccess: (data) => {
    //             setMark(data);
    //             // ["2022-02-02", "2022-02-02", "2022-02-10"] 형태로 반환되게 백엔드에게 요구
    //             
    //         },
    //     }
    // );

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const formatLongDate = ({ date, label, locale, view }) => {
        const year = date.getFullYear();
        const m = date.getMonth();
        const month = m < 9 ? `0${m + 1}` : m + 1;
        return `${year}.${month}`;
    };

    const formatWeekDay = (locale, date) => {
        const dayIndex = date.getDay();
        return customWeekdays[dayIndex];
    };

    return (
        <div className={classes.wrapper}>
            {/* <h1>My Calendar</h1> */}
            <Calendar
                onChange={handleDateChange} // Callback function when date is selected
                value={selectedDate} // Selected date (controlled component)
                formatDay={(locale, date) => moment(date).format("DD")}
                className={classes.myCalendar}
                next2Label={null}
                prev2Label={null}
                showNeighboringMonth={null}
                navigationLabel={formatLongDate}
                formatShortWeekday={formatWeekDay}
                tileContent={({ date, view }) => {
                    if (
                        mark.find(
                            (x) => x === moment(date).format("YYYY-MM-DD")
                        )
                    ) {
                        return (
                            <div onClick={() => {alert("게시글 라우팅")}} className={classes.wrapper}>
                                <div className={classes.dot}></div>
                            </div>
                        );
                    }
                }}
            />
        </div>
    );
};

export default FECalendar;
