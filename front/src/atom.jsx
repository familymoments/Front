import {atom, selector} from "recoil";

export const postid = atom({
    key:"postid",
    default:0,
    //atom상태관리
});

export const nextPostid = atom({
    key:"nextPostid",
    default:3,
    //다음 postid 설정-> 서버 연동시 필요 없음
});

export const deletePostId = atom({
    key:"deletePostId",
    default:0,
    //atom상태관리
});
export const idFounded = atom({
    key: "idFounded",
    default: "",
});
 export const recentPosts = atom({
    key:"recentPosts",
    default:[],
    //최근 게시물 저장할 배열
});
export const header = atom({
    key:"header",
    default:{},
});
export const profileImg = atom({
key:"profileImg",
default:null,
});
export const ID = atom({
    key:"ID",
    default:"",
    });
