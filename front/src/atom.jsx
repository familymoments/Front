import {atom} from "recoil";

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

export const recentPosts = atom({
    key:"recentPosts",
    default:[],
    //최근 게시물 저장할 배열
})

export const token = atom({
    key:"token",
    default:"eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTE2OTc3NzQsInN1YiI6ImFjY2Vzcy10b2tlbiIsInV1aWQiOiIwMWVlMzVhZS05NTE2LTExY2EtOGU2OC1jNTk3YzM1NmU1MmQiLCJpYXQiOjE2OTE2OTc3MTR9.obihK3YR6rp9AfvNYg8-GkBv9NjB7oYnAsq5mPa9dt0",
    // 공통
})

export const userImg = atom({
    key:"userImg",
    default:"",
    //사용자 이미지 저장
})

export const nowpost = atom({
    key:"nowpost",
    default:{},
    //현재 게시물
})

export const postlove = atom({
    key:"postlove",
    default:null,
    //현재 게시물의 하트
})

