const button = document.querySelector(".button");
const allposts = document.querySelector(".allposts");
button.addEventListener("click", fetchData);

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw Error((allposts.textContent = response.statusText));
      } else {
        return response.json();
      }
    })
    .then((data) => {
      data.forEach((element) => {
        allposts.innerHTML += `<div>(UserId):${element.userId}</div>
        <br>
        <div>(Id):${element.id}</div>
        <br>
        <div>(Title):${element.title}</div>
        <br>
        <div>(completed):${element.completed}</div>
        <br>
        `;
      });
    });
}
