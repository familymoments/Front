import axios from "axios";
import MyText from "../../../../components/MyText";
import classes from "./Setting.module.css";
import PersonInfo from "../../../../components/PersonInfo";
import Button from "../../../../components/Button";
import MySearchBar from "../../../../components/MySearchBar";

import{useNavigate} from "react-router-dom"
import { useEffect, useState } from "react";
import { header, recentPosts } from "../../../../atom";
import { useRecoilState, useRecoilValue } from "recoil";

const Setting = () => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    const [data, setData] = useRecoilState(recentPosts);
    const [searchKeyword, setSearchKeyword] = useState(""); // 검색어 상태

    const [selectedId] = useState("kk25"); // 아이디 값 설정

    const [selectedUserId, setSelectedUserId] = useState();
    const [selectedImage, setSelectedImage] = useState();

    const handleNextClick = async () => {
        await navigate("/Main/my/set", {
            state: {
                selectedUserId: selectedUserId,
                selectedImage: selectedImage,
                selectedId: selectedId,    // 선택한 아이디 전달
            },
        });
    };

    const authToken = useRecoilValue(header);
    const headers = {
        "X-AUTH-TOKEN": authToken,
    };

    const handlePersonInfoClick = (userId, userImage) => {
        setSelectedUserId(userId);
        setSelectedImage(userImage);
        setIsChecked(!isChecked);
    };

    const handleSearch = () => {
        const url = `https://familymoments-be.site//families/5/users`;
        axios
            .post(url, null, { headers })
            .then((res) => {
                console.log(res.data);
                const filteredData = Array.isArray(res.data.result)
                    ? res.data.result.filter((user) => user.status === 1).slice(0, 5)
                    : [];
                setData(filteredData);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        if (searchKeyword !== "") {
            // 검색어가 입력되면 실시간으로 검색 요청 보내기
            handleSearch();
        }
    }, [searchKeyword]);

    const handleSearchInputChange = (e) => {
        setSearchKeyword(e.target.value);
    };

    const handleSearchSubmit = () => {
        handleSearch();
    };

    // const handleButtonClick = () => {
    //     navigate("/Main/withdraw");
    // }

    return (
        <div>
            <div className={classes.content5}>
                <MyText text="탈퇴시킬 멤버를 선택해주세요." />
                <div className={classes.marginBetween} />
                <div className={classes.content}>
                <MySearchBar
                    searchbar={classes.searchbar}
                    placeholder="ID 검색"
                    value={searchKeyword}
                    onChange={handleSearchInputChange}
                    onSubmit={handleSearchSubmit}
                />
            </div>
                <PersonInfo name="clohee" isChecked={isChecked} onCheckIconClick={handlePersonInfoClick}/>
                {/* <PersonInfo name="emma" isChecked={isChecked} onCheckIconClick={handlePersonInfoClick}/> */}
                <div>
                {data.map((user) => (
                    <PersonInfo
                        onCheckIconClick={handlePersonInfoClick}
                        // key={user.id}
                        name={user.id}
                        image={user.profileImg}
                        onClick={() => handlePersonInfoClick(user.id, user.profileImg)}
                    />
                ))}
            </div>
                </div>
            <Button 
                onClick={handleNextClick}
                btn={isChecked ? `${classes.btn2} ${classes.blueBtn}` : classes.btn2} 
                title="탈퇴시키기"/>
        </div>
    );
}

export default Setting;