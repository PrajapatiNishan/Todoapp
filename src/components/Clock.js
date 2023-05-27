import { useState } from "react";

export const Clock = () =>{
    let time = new Date().toLocaleDateString();
    const   [currentTime, setCurrentTime] = useState(time);
    return(
        <div>
            <h2>{currentTime}</h2>
        </div>
    )
}