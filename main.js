const shoelist= document.querySelector(".shoe-list")
console.log(shoelist);
fetch(" http://localhost:3000/shoe").then(response => response.json())
.then((shoe) => {
shoe.forEach(shoebox)
});

const shoebox = (shoedata) => {
   console.log( shoedata.name)
console.log(shoedata)
const shoeDiv = document.createElement("div")
const shoePara = document.createElement("p")
// const editBtn = document.createElement("button")
// const deleteBtn = document.createElement("button")
// const shoeInfo = document.createElement("p")
shoePara.textContent = shoedata.name
shoeDiv.append(shoePara)
shoelist.append(shoeDiv)
}