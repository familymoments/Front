import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Landing = ()=>{
    return <div>

        <Header title="Family Moments"></Header>
        <Outlet/>

        <Header title="Family Moments" showIcon={true}></Header>

    </div>
}

export default Landing;