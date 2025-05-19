import React, { useState } from "react";

function Button() {
    const positions =["center" , "flex-start", "flex-end"]
const [initalAlignment, setAlignment] = useState(0);

const handleMouseEnter = () => {
    setAlignment((prev) => 
        (prev + 1) % positions.length);
    console.log("please ")

};

return (
    <div
    className="button-container"
    style={{ display: "flex", justifyContent: positions[initalAlignment] }}>
    <button onMouseEnter={handleMouseEnter}>Submit</button>
    </div>
);
}

export default Button;
