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
export const loginData = atom({
    key:"loginData",
     id:"id",
     pwd:"pwd",
     default:0,
     //atom상태관리
 });
 export const signupData = atom({
    key:"loginData",
     id:"id",    
     password:"pwd",
     name: "name",
     email: "email",
     strBirthData: "birthdate",
     nickname: 'nickname',
     default:0,
     //atom상태관리
 });
 export const recentPosts = atom({
    key:"recentPosts",
    default:[],
    //최근 게시물 저장할 배열


    
});