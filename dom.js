// Children selector

// const body = document.body

// console.log(body.children)
// console.log(body.children[2])
// console.log(body.children[1])

let item = document.querySelector(" ul li:nth-child(2) ")
const cont = document.querySelector("#content")
const image = document.querySelector("img")

// console.log(cont)

// console.log(item)
// console.log(item.nextElementSibling)
// console.log(item.previousElementSibling)

// styling with js

// cont.style.background = "black"
// cont.style.color = "white"

// adding of class with js

// cont.classList.add("into")

// for computer style

// const imageattri = getComputedStyle(image)

// console.log(imageattri)




// DOM

// Create an element(1)

let newItem = document.createElement("li")
// console.dir(newItem)
newItem.innerText = "Hello World"
console.log(newItem)

// Adding createdElement to html(2)

const included = document.querySelector("ul")
included.appendChild(newItem)

const firstItems = document.querySelector(" ul li:first-child")
// console.log(firstItems)

// (3)

const item2 = document.createElement("li")
item2.innerText = "Hope"

included.insertBefore(item2, firstItems)


// Another method of adding created element

const addh4 = document.createElement("h4")
const addh5 = document.createElement("h5")

addh4.innerText = "Pics"
addh5.innerText = "In-box"

const body = document.body
body.append(addh4, addh5)

// putting to the front
body.prepend(addh4, addh5)


