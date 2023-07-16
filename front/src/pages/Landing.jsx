import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Landing = ()=>{
    return <div>
        <Header title="Family Moments"></Header>
        <Outlet/>
    </div>
}

export default Landing;