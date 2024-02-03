const header = document.getElementById("heading");
header.innerHTML ="Hi!";

// 1. 단순한 프라미스와 fetch
console.log(fetch("https://dummyapi.io/data/v1/"));

fetch("https://dummyapi.io/data/v1/").then(res =>
    console.log(res.json())
);

// 2. async / await
const getFakePerson = async() =>{
    let res = await fetch("https://api.randomuser.me/?nat=US&result=1");
    let {restuls} = res.json();
    console.log(restuls);
}

getFakePerson();

// 3. Promise
const getPeople = count =>
    new Promise((resolves, rejects)=>{
        const api = `https://api.randomuser.me/?nat=US&result=${count}`;
        const request = new XMLHttpRequest();
        request.open("GET",api);
        request.onload = () => 
            request.status === 200 ? resolves(JSON.parse(request.response).restuls) : reject(Error(request.statusText));
        request.onerror = err => rejects(err);
        request.send();
    });

getPeople(5).then(members => console.log(members))
            .catch(error => console.error(`getPeople failed : ${error.message}`));
