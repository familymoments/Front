//게시글 상태관리...

import {atom, selector} from "recoil";

export const postdata = atom({
    key:"postdata",
    default:[],
    //게시글리스트 받아오기
});


export const preupdate = atom({
    key:"preupdate",
    default:{
        "imgs":[],
        "content":"",
    },
    //업데이트 전 정보들 
});

export const featposts = atom({
    key:"featposts",
    default:0,
    //post의 수정이 있는지
});

