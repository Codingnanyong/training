/// 3. Return Data
/// ** map , reduce

const schools = ["Busan","Seoul","Inchon"];

console.log(schools.join(", "));

// Array.filter : Pure Function
// n 이 들어 있는 학교만 새로운 배열로...
const nSchools = schools.filter(school => school[0] === "n");
console.log(nSchools);

// 특정 학교를 제외한 새로운 배열...
const cutSchool = (cut, list) => list.filter(school => school !== cut);
console.log(cutSchool("Seoul",schools).join(", "));
console.log(schools.join("\n"));

// Array.map 예시
const highSchools = schools.map(school => `${school} High School`);
console.log(highSchools.join("\n"));
console.log(schools.join("\n"));

// ma 함수는 객체, 값, 배열, 다른 함수 등 모든 Type의 값으로 이루어진 배열 생성 가능
const highSchools2 = schools.map(school => ({name: school}));
console.log(highSchools2);

// 원본은 변경하지 않으면서, 특정 배열 값 변경
let schools2 = [
    { name : "Busan" },
    { name : "Souel" },
    { name : "Ulsan"},
    { name : "Kimhae"}
];

let updateSchools = editName("Ulsan","US",schools);
console.log(updateSchools[1]);
console.log(schools2[1]);

const editName = (oldName , name , arr) => 
    arr.map(item => {
        if(item.name === oldName){
        return {
            ...item,
            name
        };
    }
    else{
        return item;
    }
});

// improve editName Funtion
const editName2 = (oldName,name,arr)=> 
    arr.map(item => (item.name === oldName ? {...item,name}: item));

// 
const editNth = (n,name,arr) =>
    arr.map((item,i) => (i === n ? {...item,name}:item));
let updateSchools2 = editNth(2,"Mansfield",schools);
console.log(updateSchools2[2]);
console.log(schools[2]);

// object -> array
const schools3 = {
    "Yorktown" : 10,
    "Washington & Lee" : 2,
    "Wakefield" : 5
};

const schoolArray = Object.keys(schools3).map(key => ({
    name : key,
    wins : schools[key]
}));

// reduce Example
const ages = [21,18,42,40,64,32,30];
const maxAge = ages.reduce((max,age) => {
    console.log(`${age} > ${max} = ${age > max}`);
    if(age > max ) return age;
    else return max;
},0);

console.log('maxAge',maxAge);

// improve 
const max = ages.reduce((max,age)=>( value > max ? value : max),0);

// Array -> Object (reduce)
const colors = [
    {
        id : 'xekard',
        title : "Dark Red",
        rating : 3
    },
    {
        id : 'jbwsof',
        title : "Big Blue",
        rating : 2
    },
    {
        id : 'prigbj',
        title : "Bear Gray",
        rating : 5
    },
    {
        id : 'rybhsl',
        title : "Banana",
        rating : 1
    }
];
const hashColors = colors.reduce(
    (hash, {id ,title, rating})=> {
        hash[id] = {title,rating};
        return hash;
    },
    {}
);
console.log(hashColors);

// reduce -> new Array
const colors2 = ["red","red","green","blue","green"];
const uniqueColors = colrs.reduce(
    (unique, color) => unique,indexOf(color) !== -1 ? unique : [...unique,color],
    []
);
console.log(distinctColors);