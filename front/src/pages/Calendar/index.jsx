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
        setMark([[...mark], "2023-08-01", "2023-08-22", "2023-08-29"]);
    }, []);
    // console.log(mark);

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
        // console.log(moment(date).format("YYYY-MM-DD"))

        if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            alert("Oh!");
        }
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

    // 주말인지 확인하는 함수
    const isWeekend = (date) => {
        const day = date.getDay();
        return day === 0; // 일요일(0) 또는 토요일(6)인 경우
    };

    // 공휴일인지 확인하는 함수
    const isHoliday = (date) => {
        // 공휴일인지 확인하는 로직을 구현하면 됩니다.
        // 예를 들어, 공휴일인 날짜를 배열로 저장하고, 해당 날짜와 비교하여 공휴일 여부를 반환하도록 할 수 있습니다.
        // 아래는 단순히 예시로 "2023-08-15"를 공휴일로 설정한 예시입니다.
        // console.log(moment(date).format("YYYY-MM-DD"))
        return moment(date).format("YYYY-MM-DD") === "2023-08-15";
    };

    // 각 날짜에 대한 클래스 이름을 반환하는 함수
    const tileClassName = ({ date }) => {
        if (isHoliday(date) || isWeekend(date)) {
            return "redText";
        }
        return null;
    };

    return (
        <div className={classes.wrapper}>
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
                tileClassName={tileClassName}
                tileContent={({ date, view }) => {
                    if (
                        mark.find(
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
        </div>
    );
};

export default FECalendar;
