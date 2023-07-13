// import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import classes from "./App.module.css";
import WhiteSpace from "./components/WhiteSpace";
import NewFamily from "./pages/NewFamily";


function App() {
    return (
        <div className={classes.App}>
            <WhiteSpace />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<NewFamily />} />
                    <Route path="/example" element={<></>} />
                </Routes>
            </BrowserRouter>
            <WhiteSpace />
        </div>
    );
}

export default App;
