import { useState } from "react";
import Resign1 from "./Page/Resign1";
import Resign2 from "./Page/Resign2";
import Resign3 from "./Page/Resign3";

const Resign = () => {
    const [idx, setIdx] = useState(0);
    const page = [
        <Resign1 idxHandler={setIdx} />,
        <Resign2 idxHandler={setIdx} />,
        <Resign3 idxHandler={setIdx} />,
    ];

    return (
        <div>
            {page[idx]}
            {/* <Resign1/> */}
            {/* <Resign2/> */}
            {/* <Resign3/> */}
        </div>
    );
};

export default Resign;
