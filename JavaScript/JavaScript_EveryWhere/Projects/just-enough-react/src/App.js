import React from "react";
import "./App.css";
import Sparkle from "./Sparkle";

function App() {
    const name = "Adam";
    const now = String(new Date());
    return (
        <div className="App">
            <p>Hello {name}!</p>
            <p>The current time is {now}</p>
            <p>Two plus to is {2 + 2}</p>
            <Sparkle></Sparkle>
        </div>
        // <React.Fragment>
        //     <p>Hello World!</p>
        // </React.Fragment>
    );
}

export default App;
