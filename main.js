const shoelist= document.querySelector(".shoe-list")
console.log(shoelist);
fetch("http://localhost:3000/shoes").then(response => response.json())
.then((shoes) => {
console.log("do i get tasks",shoes)
shoes.forEach(shoebox)
});
const shoebox = (shoedata) => {
const shoeDiv = document.createElement("div")
const shoePara = document.createElement("p")
const editBtn = document.createElement("button")
const deleteBtn = document.createElement("button")
const shoeInfo = document.createElement("p")
shoePara.textContent = shoedata.shoes
shoeDiv.append(shoePara)
shoelist.append(shoeDiv)
}