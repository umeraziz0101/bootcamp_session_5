import React from "react";
import Child from "./Child";
import Child2 from "./Child2";
const Parent = () => {
    return (
        <div>
            <h1>This is Parent Component</h1>
            <Child />
            <Child2 />
        </div>
    );
};

export default Parent;
