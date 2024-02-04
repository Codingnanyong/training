/// 1. Immutability (불변성) : 데이터는 변할 수 없음!
let color_lawn = {
    title : "잔디",
    color : "#00FF00",
    rating : 0
};

function rateColor(color,rating){
    color.rating = rating;
    return color;
}

console.log(rateColor(color_lawn,5).rating); // 5
console.log(color_lawn.rating); // 5

// improve 
var rateColor2 = function(color,rating){
    return Object.assign({},color,{rating:rating});
}

console.log(rateColor2(color_lawn,5).rating); // 5
console.log(color_lawn.rating); // 0

// improve by new JavaScript
const rateColor3 = (color,rating) => ({
    ...color,
    rating
});

/// 객체 반환은 () 가 있어야함. {} 이것은 객체를 반환 할 수 없음.

let list = [
    {title : "Dark Red"},
    {title : "lawn"},
    {title : "Pink"}
]

const addColor = function(title,color){
    colors.push({title,color});
    return colors;
}

console.log(addColor("Shining Green",list).length); // 4
console.log(list.length); // 4

// improve
const addColor2 = (title,array) => array.concat({title});

console.log(addColor2("Shining Green",list).length); // 4
console.log(list.length); // 3

// improve by new JavaScript
const addColor3 = (title,list) => [...list,{title}];