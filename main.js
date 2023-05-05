console.log("hello world");

fetch("http://localhost:3000/shoes").then(response => response.json()).then(shoes => console.log(shoes))