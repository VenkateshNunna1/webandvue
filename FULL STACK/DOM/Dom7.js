const p = document.querySelector("p");

const i = document.createElement("i");
i.innerText = "hello ganesh";
i.color = "green";
i.classList.toggle("gani");

console.log(i);

p.append(i);

p.insertAdjacentElement("afterbegin", i);
p.insertAdjacentElement("afterend", i);
p.insertAdjacentElement("beforebegin", i);
p.insertAdjacentElement("beforeend", i);
