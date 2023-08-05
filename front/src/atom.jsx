import {atom} from "recoil";

export const postid = atom({
    key:"postid",
    default:0,
    //atom상태관리
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