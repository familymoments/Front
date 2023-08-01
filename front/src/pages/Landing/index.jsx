import { Routes, Route,useNavigate, Outlet } from "react-router-dom";

import Header from "../../components/Header";



const Landing=(props)=>{

    
    return (<div>
        <Header title={props.title}></Header>
        <Outlet/>

        

    </div>)
};

export default Landing;