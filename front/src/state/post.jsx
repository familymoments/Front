//게시글 상태관리...

import {atom, selector} from "recoil";

export const postdata = atom({
    key:"postdata",
    default:[],
    //게시글리스트 받아오기
});