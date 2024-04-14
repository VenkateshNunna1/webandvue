const button = document.querySelector(".button");
const userId = document.querySelector(".userId");
const id = document.querySelector(".id");
const title = document.querySelector(".title");
const completed = document.querySelector(".completed");

button.addEventListener("click", fetchData);

async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) {
      throw Error(error);
    } else {
      const data = await response.json();
      console.log(data);
      userId.textContent = data.userId;
      id.textContent = data.id;
      title.textContent = data.title;
      completed.innerHTML = data.completed;
    }
  } catch (error) {
    console.log(error);
  }
}
