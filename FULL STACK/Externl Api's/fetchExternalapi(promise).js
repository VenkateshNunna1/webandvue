const button = document.querySelector(".button");
const userId = document.querySelector(".userId");
const id = document.querySelector(".id");
const title = document.querySelector(".title");
const completed = document.querySelector(".completed");

button.addEventListener("click", fetchData);

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/todos/2")
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      userId.textContent = data.userId;
      id.textContent = data.id;
      title.textContent = data.title;
      completed.textContent = data.completed;
    })
    .catch((error) => {
      console.log(error);
    });
}
