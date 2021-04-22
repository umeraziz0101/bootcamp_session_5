import React, { useState } from "react";
import Parent from "./Parent";
import Counter from "./CounterContext";
function App() {
    let count = useState(0);
    return (
        <Counter.Provider value={count}>
            <div>
                <Parent />
            </div>
        </Counter.Provider>
    );
}

export default App;
