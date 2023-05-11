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
const shoescript = document.createElement("div")
const shoeInfo = document.createElement("div")
// const editBtn = document.createElement("button")
// const deleteBtn = document.createElement("button")
shoePara.textContent = shoedata.name
shoeDiv.textContent = shoedata.id
shoeInfo.textContent = shoedata.type
shoescript.textContent = shoedata.description
shoeInfo.append(shoescript)
shoeDiv.append(shoePara)
shoelist.append(shoeDiv)
shoePara.append(shoeInfo)
}