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
//chat


// const johnSelectorBtn = document.querySelector('#john-selector')
// const janeSelectorBtn = document.querySelector('#jane-selector')
// const chatHeader = document.querySelector('.chat-header')
// const chatMessages = document.querySelector('.chat-messages')
// const chatInputForm = document.querySelector('.chat-input-form')
// const chatInput = document.querySelector('.chat-input')
// const clearChatBtn = document.querySelector('.clear-chat-button')

// const messages = JSON.parse(localStorage.getItem('messages')) || []

// const createChatMessageElement = (message) => `
//   <div class="message ${message.sender === 'John' ? 'blue-bg' : 'gray-bg'}">
//     <div class="message-sender">${message.sender}</div>
//     <div class="message-text">${message.text}</div>
//     <div class="message-timestamp">${message.timestamp}</div>
//   </div>
// `

// window.onload = () => {
//   messages.forEach((message) => {
//     chatMessages.innerHTML += createChatMessageElement(message)
//   })
// }

// let messageSender = 'John'

// const updateMessageSender = (name) => {
//   messageSender = name
//   chatHeader.innerText = `${messageSender} chatting...`
//   chatInput.placeholder = `Type here, ${messageSender}...`

//   if (name === 'John') {
//     johnSelectorBtn.classList.add('active-person')
//     janeSelectorBtn.classList.remove('active-person')
//   }
//   if (name === 'Jane') {
//     janeSelectorBtn.classList.add('active-person')
//     johnSelectorBtn.classList.remove('active-person')
//   }

//   /* auto-focus the input field */
//   chatInput.focus()
// }

// johnSelectorBtn.onclick = () => updateMessageSender('John')
// janeSelectorBtn.onclick = () => updateMessageSender('Jane')

// const sendMessage = (e) => {
//   e.preventDefault()

//   const timestamp = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
//   const message = {
//     sender: messageSender,
//     text: chatInput.value,
//     timestamp,
//   }

//   /* Save message to local storage */
//   messages.push(message)
//   localStorage.setItem('messages', JSON.stringify(messages))

//   /* Add message to DOM */
//   chatMessages.innerHTML += createChatMessageElement(message)

//   /* Clear input field */
//   chatInputForm.reset()

//   /*  Scroll to bottom of chat messages */
//   chatMessages.scrollTop = chatMessages.scrollHeight
// }

// chatInputForm.addEventListener('submit', sendMessage)

// clearChatBtn.addEventListener('click', () => {
//   localStorage.clear()
//   chatMessages.innerHTML = ''
// })

//To-do-list

// const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// document.querySelector("#enter").addEventListener("click", () => {
//   const item = document.querySelector("#item")
//   createItem(item)
// })

// document.querySelector("#item").addEventListener("keypress", (e) => {
//   if(e.key === "Enter"){
//     const item = document.querySelector("#item")
//     createItem(item)
//   }
// })

// function displayDate(){
//   let date = new Date()
//   date = date.toString().split(" ")
//   date = date[1] + " " + date[2] + " " + date[3] 
//   document.querySelector("#date").innerHTML = date 
// }

// function displayItems(){
//   let items = ""
//   for(let i = 0; i < itemsArray.length; i++){
//     items += `<div class="item">
//                 <div class="input-controller">
//                   <textarea disabled>${itemsArray[i]}</textarea>
//                   <div class="edit-controller">
//                     <i class="fa-solid fa-check deleteBtn"></i>
//                     <i class="fa-solid fa-pen-to-square editBtn"></i>
//                   </div>
//                 </div>
//                 <div class="update-controller">
//                   <button class="saveBtn">Save</button>
//                   <button class="cancelBtn">Cancel</button>
//                 </div>
//               </div>`
//   }
//   document.querySelector(".to-do-list").innerHTML = items
//   activateDeleteListeners()
//   activateEditListeners()
//   activateSaveListeners()
//   activateCancelListeners()
// }

// function activateDeleteListeners(){
//   let deleteBtn = document.querySelectorAll(".deleteBtn")
//   deleteBtn.forEach((dB, i) => {
//     dB.addEventListener("click", () => { deleteItem(i) })
//   })
// }

// function activateEditListeners(){
//   const editBtn = document.querySelectorAll(".editBtn")
//   const updateController = document.querySelectorAll(".update-controller")
//   const inputs = document.querySelectorAll(".input-controller textarea")
//   editBtn.forEach((eB, i) => {
//     eB.addEventListener("click", () => { 
//       updateController[i].style.display = "block"
//       inputs[i].disabled = false })
//   })
// }

// function activateSaveListeners(){
//   const saveBtn = document.querySelectorAll(".saveBtn")
//   const inputs = document.querySelectorAll(".input-controller textarea")
//   saveBtn.forEach((sB, i) => {
//     sB.addEventListener("click", () => {
//       updateItem(inputs[i].value, i)
//     })
//   })
// }

// function activateCancelListeners(){
//   const cancelBtn = document.querySelectorAll(".cancelBtn")
//   const updateController = document.querySelectorAll(".update-controller")
//   const inputs = document.querySelectorAll(".input-controller textarea")
//   cancelBtn.forEach((cB, i) => {
//     cB.addEventListener("click", () => {
//       updateController[i].style.display = "none"
//       inputs[i].disabled = true
//       inputs[i].style.border = "none"
//     })
//   })
// }

// function createItem(item){
//   itemsArray.push(item.value)
//   localStorage.setItem('items', JSON.stringify(itemsArray))
//   location.reload()
// }

// function deleteItem(i){
//   itemsArray.splice(i,1)
//   localStorage.setItem('items', JSON.stringify(itemsArray))
//   location.reload()
// }

// function updateItem(text, i){
//   itemsArray[i] = text
//   localStorage.setItem('items', JSON.stringify(itemsArray))
//   location.reload()
// }

// window.onload = function() {
//   displayDate()
//   displayItems()
// };