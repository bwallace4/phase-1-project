//fetch db.json ...json-server --watch db.json in the terminal 
const shoelist= document.querySelector(".shoe-list")
console.log(shoelist);
fetch("http://localhost:3000/shoe").then(response => response.json())
.then((shoe) => {
//for each method
shoe.forEach(shoebox)
});
//eventlistner
let clickExample = document.querySelector("#clickExample");
clickExample.addEventListener("mouseover", function() {
    console.log("I've been clicked");
})
//eventlistner 
submitExample.addEventListener("submit", function(e){
    e.preventDefault()
    console.log("hello")
})

const shoebox = (shoedata) => {
// hover over text & change color
const shoeDiv = document.createElement("div")
shoeDiv.className = "shoeDiv"
shoeDiv.addEventListener("mouseover",function(){
    shoeDiv.style.color = "#FF0000";
})
shoeDiv.addEventListener("mouseleave",function(){
    shoeDiv.style.color = "black";
})

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
// click on pictures to change images
var image_tracker = 'f';
image.addEventListener('click', function(){
   if(image_tracker == 'f'){
    image.src = shoedata.alt_image
    image_tracker = 't';
   }else{
    image.src = shoedata.image
    image_tracker = 'f';
    }
})}
//open index.html in the terminal