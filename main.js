
const shoelist= document.querySelector(".shoe-list")
console.log(shoelist);
fetch(" http://localhost:3000/shoe").then(response => response.json())
.then((shoe) => {
shoe.forEach(shoebox)
});

let clickExample = document.querySelector("#clickExample");
clickExample.addEventListener("click", function() {
    console.log("I've been clicked");
})
submitExample.addEventListener("submit", function(e){
    e.preventDefault()
    
})

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