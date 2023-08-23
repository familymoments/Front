// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import MyText from "../../../components/MyText";
// import Button from "../../../components/Button";
// import classes from "./CreateFamily.module.css";
// import MySearchBar from "../../../components/MySearchBar";
// import PersonInfo from "../../../components/PersonInfo";
// import Header from '../../../components/Header';

// import { useNavigate } from "react-router-dom";
// import { header, recentPosts } from "../../../atom";
// import { useRecoilState, useRecoilValue } from "recoil";

//     const CreateFamily = () => {
//         const navigate = useNavigate();
//         const [isChecked, setIsChecked] = useState(false);

//         const [data, setData] = useRecoilState(recentPosts);
//         const [searchKeyword, setSearchKeyword] = useState(""); // 검색어 상태

//         const [selectedUserId, setSelectedUserId] = useState();
//         const [selectedImage, setSelectedImage] = useState();

//         const handleNextClick = async () => {
//             await navigate("/landing/createfamily5", {
//                 state: {
//                     selectedUserId: selectedUserId,
//                     selectedImage: selectedImage,
//                 },
//             });
//         };
    
//   // PersonInfo 컴포넌트에서 사용자 선택 시 호출되는 함수
//         const handlePersonInfoClick = (userId, userImage) => {
//             setSelectedUserId(userId);
//             setSelectedImage(userImage);
//             setIsChecked(!isChecked);   //체크 상태 변경
//         };

//        // 헤더 아톰에서 헤더 값 가져오기
//         const authToken = useRecoilValue(header);
//         const headers = {
//         "X-AUTH-TOKEN": authToken,
//         };

//     const handleSearch = () => {
//         console.log("Search Keyword:", searchKeyword); // 검색어 출력
//         // 유저 검색을 위한 서버 요청
//         // 헤더를 포함한 axios 요청
//         axios.get(`https://familymoments-be.site/users?keyword=${searchKeyword}`, { headers })
//             .then(res => {
//                 console.log(res.data);
//                 // 최대 5개의 유저만 보여주도록 잘라냄
//                 const filteredData = Array.isArray(res.data.result)
//                 ? res.data.result.filter(user => user.status === 1).slice(0, 5)
//                 : [];
//             setData(filteredData);
//             })
//             .catch(err => console.log(err));
//     };

//     useEffect(() => {
//         if (searchKeyword !== "") {
//             // 검색어가 입력되면 실시간으로 검색 요청 보내기
//             handleSearch();
//         }
//     }, [searchKeyword]);


//     const handleSearchInputChange = (e) => {
//         setSearchKeyword(e.target.value);
//     };

//     const handleSearchSubmit = () => {
//         handleSearch();
//     };

//     return (
//         <div>
//             <Header title="가족" />
//             <div className={classes.content3}>
//             <MyText text="우리 가족 생성하기" />
//         </div>
//         <div className={classes.content}>
//             <MySearchBar
//             searchbar={classes.searchbar}
//             placeholder="ID 검색"
//             value={searchKeyword}
//             onChange={handleSearchInputChange}
//             onSubmit={handleSearchSubmit}
//         />
//         </div>

//         <div className={classes.user}>
//         {data.map((user) => (
//         <PersonInfo 
//             key={user.id} 
//             name={user.id} 
//             image={user.profileImg} 
//             onClick={() => handlePersonInfoClick(user.id, user.profileImg)}
//             isChecked={isChecked}   //체크 상태 전달
//         />
//         ))}
//         </div>
//             <Button
//             onClick={handleNextClick}
//                 // btn={classes.btn}
//                 title="가족 생성하기"
//                 btn={isChecked ? `${classes.btn3} ${classes.btn}` : `${classes.btn3} ${classes.btn3}`}
//                 // disabled={!isChecked} 
//             />
//         </div>
//     );
// };
    
//     export default CreateFamily;
import React, { useEffect, useState } from "react";
import axios from "axios";

import MyText from "../../../components/MyText";
import Button from "../../../components/Button";
import classes from "./CreateFamily.module.css";
import MySearchBar from "../../../components/MySearchBar";
import PersonInfo from "../../../components/PersonInfo";
import Header from '../../../components/Header';

import { useNavigate } from "react-router-dom";
import { header, recentPosts } from "../../../atom";
import { useRecoilState, useRecoilValue } from "recoil";

    const CreateFamily = () => {
        const navigate = useNavigate();
        const [data, setData] = useRecoilState(recentPosts);
        const [searchKeyword, setSearchKeyword] = useState(""); // 검색어 상태

        const [selectedUserId, setSelectedUserId] = useState();
        const [selectedImage, setSelectedImage] = useState();

        const handleNextClick = async () => {
            await navigate("/landing/createfamily5", {
                state: {
                    selectedUserId: selectedUserId,
                    selectedImage: selectedImage,
                },
            });
        };
    
  // PersonInfo 컴포넌트에서 사용자 선택 시 호출되는 함수
        const handlePersonInfoClick = (userId, userImage) => {
            setSelectedUserId(userId);
            setSelectedImage(userImage);
        };

       // 헤더 아톰에서 헤더 값 가져오기
        const authToken = useRecoilValue(header);
        const headers = {
        "X-AUTH-TOKEN": authToken,
        };

    const handleSearch = () => {
        console.log("Search Keyword:", searchKeyword); // 검색어 출력
        // 유저 검색을 위한 서버 요청
        // 헤더를 포함한 axios 요청
        axios.get(`https://familymoments-be.site/users?keyword=${searchKeyword}`, { headers })
            .then(res => {
                console.log(res.data);
                // 최대 5개의 유저만 보여주도록 잘라냄
                const filteredData = Array.isArray(res.data.result)
                ? res.data.result.filter(user => user.status === 1).slice(0, 5)
                : [];
            setData(filteredData);
            })
            .catch(err => console.log(err));
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

    return (
        <div>
            <Header title="가족" />
            <div className={classes.content3}>
            <MyText text="우리 가족 생성하기" />
        </div>
        <div className={classes.content}>
            <MySearchBar
            searchbar={classes.searchbar}
            placeholder="ID 검색"
            value={searchKeyword}
            onChange={handleSearchInputChange}
            onSubmit={handleSearchSubmit}
        />
        </div>

        <div className={classes.user}>
        {data.map((user) => (
        <PersonInfo 
            key={user.id} 
            name={user.id} 
            image={user.profileImg} 
            onClick={() => handlePersonInfoClick(user.id, user.profileImg)}
        />
        ))}
        </div>
            <Button
            onClick={handleNextClick}
                btn={classes.btn}
                title="가족 생성하기"
            />
        </div>
    );
};
    
    export default CreateFamily;