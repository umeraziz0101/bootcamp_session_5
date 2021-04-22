import React, { useContext } from "react";
import counterContext from "./CounterContext";
const Child = () => {
    const counter = useContext(counterContext);
    console.log(counter);
    return (
        <div>
            <h3>This is first child using Counter Context</h3>
            <p>Counter value is: {counter[0]}</p>
            <button onClick={() => counter[1](++counter[0])}>Increment Context</button>
        </div>
    );
};

export default Child;
