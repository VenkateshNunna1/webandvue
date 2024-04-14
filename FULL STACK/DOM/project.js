const button = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

function addGoal() {
  const value = input.value;
  const createLi = document.createElement("li");
  createLi.textContent = value;
  ul.appendChild(createLi);
  nput.value = " "; //reseting value
}

button.addEventListener("click", addGoal);
