import { Fragment } from "react";
import ReactDOM from "react-dom/client";

// 1. Default React
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<p className="hello">안녕 리액트!</p>);

// 2. React (JSX) : camel grammar
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <form>
//     <label htmlFor="name">이름</label>
//     <input id="name" type="text" onBlur="" onFocus="" onMouseDown=""></input>
//   </form>
// );

// 2. React : Fragment
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <p>안녕</p>
//     <p>리액트</p>
//   </>
// );

const product = "MacBook";
const model = "pro";
const item = product + " " + model;

const imageUrl =
  "https://i.namu.wiki/i/O71RYxX1qnF9ecIYxkooxV1-9IMQQH4EX0mM3stKT4DF1RPMOO9XXC_sVbG6V0zlmzt0UE4oZGsgIuGiWryK8l__Xqk7bi5MI6y2v3audFJaXSOhHPjnrX_WCaf5PqFq9NGTvHmm9jy_KWNt_X0L7Q.webp";

function handleClick() {
  alert("Soon...");
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>나만의 {item} 주문하기</h1>
    <img src={imageUrl} alt="제품 사진"></img>
    <button onClick={handleClick}>확인</button>
  </>
);
