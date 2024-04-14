//create element

const h1 = document.createElement("h1");
h1.innerText = "hello world";
h1.style.color = "red";
h1.classList.add("greetings");
console.log(h1.style.color);

const body = document.querySelector("body");
body.appendChild(h1);

const li = document.createElement("li");
li.textContent = "hello gani";

const ul = document.querySelector("ul");

ul.appendChild(li);

//---------insertBefore(what,where);

const ul1 = document.querySelector("ul");
const newLi = document.createElement("li");

newLi.innerText = "hii good morning";

const firstLi = document.querySelector("li");
ul1.insertBefore(newLi, firstLi);

const ul2 = document.querySelector("ul");
const newLi1 = document.createElement("li");
newLi1.innerText = "hiii bahubali";
newLi1.style.color = "red";
newLi1.classList.add("bahubali");

const li2 = document.querySelector("li");
ul2.insertBefore(newLi1, li2);
