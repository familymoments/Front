import { useRecoilState } from "recoil";
import { header } from "./atom";
import axios from "axios";
import { useEffect } from "react";

const Reissue = () => {
    const SERVER = process.env.REACT_APP_SERVER_URL;
    const [headers, setHeaders] = useRecoilState(header);

    const getToken = async () => {
        const response = await axios.post(
            `${SERVER}/users/auth/reissue`,
            { headers }
        );
        console.log(headers)
        console.log(response.data)
    };

    useEffect(() => {
        // 컴포넌트가 마운트될 때 API 호출 한 번 수행
        getToken();
    
        // 15분(900000 밀리초)마다 API 호출을 수행하는 인터벌 설정
        const intervalId = setInterval(() => {
            getToken();
        // }, 5000); // 15분(900000 밀리초)
        }, 880000); // 15분(900000 밀리초)
    
        // 컴포넌트 언마운트 시 인터벌 클리어
        return () => {
          clearInterval(intervalId);
        };
      }, []);
};

export default Reissue;
