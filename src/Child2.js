import React, { useReducer } from "react";
import counterReducer from "./CounterReducer";

const Child2 = () => {
    const [state, dispatch] = useReducer(counterReducer, 0);
    return (
        <div>
            <h3>This is second child using Counter Reducer</h3>
            <p>Value of Reducer State is: {state}</p>
            <button onClick={() => dispatch("INCREMENT")}>Increment Reducer</button>
        </div>
    );
};

export default Child2;
