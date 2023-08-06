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
    default:[{    
        postId : 1,
        writer : "융맘",
        profileImg : "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1634342171563-2126756b8a87%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8%26w%3D1000%26q%3D80&type=a340",
        content : "이번에 가족들과 간 여행~~~^^** ",
        imgs : ["https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjlfMTI0%2FMDAxNjYxNzYzMTE4MzQw.BDE2sMPhX7xYVad_eo6IL4EjuxUjojQgNHc70XWvbR8g.m9Z4ZYEmP6R2NZYUwTft9-nAuaR4-D6z9Clga7VthxUg.JPEG.poomgoango%2F%25C0%25BB%25BF%25D5%25B8%25AE.jpg&type=a340","https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MDdfMTE3%2FMDAxNjU3MTc3MzE2Nzgz.leQda73NGeUkGP03s8fJBwhcpSRIJSLA7UoIuhTS5jsg.aMeYugUXQeirdpOOYbVHQhR3mtu9SMoWs8vz24pjaLAg.JPEG.love_wlgo%2F20190622%25A3%25DF144713.jpg&type=sc960_832"],
        createdAt : "2023년 8월 5일",
        loved : false
        },{    
            postId : 2,
            writer : "융파",
            profileImg : "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA2MTRfODAg%2FMDAxNTYwNDk3NDUzNjk0.ZMZ2KllDiPv3YvaJTT9ge94IfEmpstQRwcW4Ok9mU6Qg.qYUTBwaFYpC7P7zymIWceJ1uQCI6rqcd0feZPReM39kg.JPEG.xrism%2F20190614_%25C1%25A630%25C8%25B8%25BF%25EB%25C6%25F2%25B0%25F1%25C7%25C1%25C5%25AC%25B7%25B4%25C3%25A8%25C7%25C7%25BE%25F0%25B9%25D7%25C8%25B8%25BF%25F8%25C4%25A3%25BC%25B1%25B4%25EB%25C8%25B8_25.jpg&type=a340",
            content : "오랜만에 가족 다함께 본 노을 ~~ 멋지다~~~~",
            imgs : ["https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MDdfMTE3%2FMDAxNjU3MTc3MzE2Nzgz.leQda73NGeUkGP03s8fJBwhcpSRIJSLA7UoIuhTS5jsg.aMeYugUXQeirdpOOYbVHQhR3mtu9SMoWs8vz24pjaLAg.JPEG.love_wlgo%2F20190622%25A3%25DF144713.jpg&type=sc960_832","https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MjlfMTI0%2FMDAxNjYxNzYzMTE4MzQw.BDE2sMPhX7xYVad_eo6IL4EjuxUjojQgNHc70XWvbR8g.m9Z4ZYEmP6R2NZYUwTft9-nAuaR4-D6z9Clga7VthxUg.JPEG.poomgoango%2F%25C0%25BB%25BF%25D5%25B8%25AE.jpg&type=a340"],
            createdAt : "2023년 8월 4일",
            loved : true
            },
    ],
    //최근 게시물 저장할 배열


    
})
