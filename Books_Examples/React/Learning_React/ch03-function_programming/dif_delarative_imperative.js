/// 1. Imperative Programming
const string = "Restaurants in Hanalei";
const urlFriendly = "";

for(var i=0; i<string.length;i++){
    if(string[i] === " "){
        urlFriendly += "-";
    }
    else{
        urlFriendly += string[i];
    }
}

console.log(urlFriendly);

/// 2.Delarative Programming === Functional Programming
/// 선언형 프로그래밍 === 함수형 프로그래밍
const string2= "Restaurants in Hanalei";
const urlFriendly2 = string.replace(/ /g,"-");

console.log(urlFriendly2);

/// DOM(Document Object Model)
/// 1. Imperative Programming
var target = document.getElementById("target");
var wrapper = document.createElement("div");
var headline = document.createElement("h1");

wrapper.id = "welcome";
headline.innerText = "Hello,World";

wrapper.appendChild(headline);
target.appendChild(wrapper);

/// 2.React Component
const {render} = ReactDom;

const Welcom = () => (
    <div id ="welcome">
        <h1>Hello,World</h1>
    </div>
);

render(<Welcom/>,
    document.getElementById('target'));