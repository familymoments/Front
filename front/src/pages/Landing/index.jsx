import { Routes, Route,useNavigate, Outlet } from "react-router-dom";

import Header from "../../components/Header";



const Landing=(props)=>{

    
    return (<div style={{width:"100%"}}>
        <Header title={props.title}></Header>
        <Outlet/>
    </div>)
};

export default Landing;