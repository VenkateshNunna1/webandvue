const section = document.querySelector("section");

const i = document.createElement("i");
i.innerText = "hello guys";
i.style.color = "red";
i.classList.toggle("kishore");
console.log(i);
const h4 = document.createElement("h4");
h4.innerText = "hello are you ready";
h4.style.color = "green";
h4.classList.add("ready");
console.log(h4);
section.append(i);
section.prepend(h4);
