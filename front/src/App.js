// import "./App.css";
import classes from "./App.module.css";
import WhiteSpace from "./components/WhiteSpace";
import NewFamily from "./pages/NewFamily";

function App() {
    return (
        <div className={classes.App}>
            <WhiteSpace />
            <NewFamily />
            <WhiteSpace />
        </div>
    );
}

export default App;
