
const shoelist= document.querySelector(".shoe-list")
console.log(shoelist);
fetch(" http://localhost:3000/shoe").then(response => response.json())
.then((shoe) => {
shoe.forEach(shoebox)
});

const shoebox = (shoedata) => {

const shoeDiv = document.createElement("div")
const shoePara = document.createElement("p")
const shoescript = document.createElement("div")
const shoeInfo = document.createElement("div")
const image = document.createElement("img")
const alt_image = document.createElement("img")

image.src = shoedata.image
image.className = "shoeImage"
alt_image.src = shoedata.alt_image
shoePara.textContent = shoedata.name
shoeDiv.textContent = shoedata.id
shoeInfo.textContent = shoedata.type
shoescript.textContent = shoedata.description

shoeInfo.append(shoescript)
shoescript.append(image)
shoeDiv.append(shoePara)
shoelist.append(shoeDiv)
shoePara.append(shoeInfo)

let toggle = true;
image.addEventListener('click', function(){
   toggle = !toggle;
   if("toggle"){
    image.src = shoedata.alt_image
   }else{
    image.src = "shoedata.alt-image"
   
   }
    
   
  

})
}