import React, { useState } from "react";
import ReactDOM from "react-dom";

type AppProps = {
  item: string;
};

// before
// function App(props: AppProps) {
//   return (
//     <div>
//       <h1>{props.item}</h1>
//     </div>
//   );
// }

//improve - 구조 분해
function App({ item }: AppProps) {
  const [faricColor, setFabricColor] = useState("purple");
  return (
    <div>
      <h1>{faricColor}</h1>
      <button onClick={() => setFabricColor("blue")}>
        Make the Jacket Blue
      </button>
      {/* <h1>{item}</h1> */}
    </div>
  );
}

ReactDOM.render(<App item={1} />, document.getElementById("root"));

export default App;
