import Styles from "../pages/Findid2.module.css"
import Header from "../components/Header";
import Inputwindow from "../components/Inputwindow";
function Findid2(){
    return (
    <div id = {Styles.page}>
        <Header title = "Family Moments"/>
        <h1 id = {Styles.toptext}>아이디 찾기</h1>
        <Inputwindow></Inputwindow>
        <div>
        <button></button>
        <button></button>
        </div>
    </div>);
}
export default Findid2;