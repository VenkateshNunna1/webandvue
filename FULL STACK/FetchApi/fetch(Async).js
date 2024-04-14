const result = document.querySelector(".result");

async function fetchData() {
  try {
    const response = await fetch("text.txt");
    if (!response.ok) {
      throw Error((result.textContent = response.statusText));
    } else {
      const data = await response.text();
      console.log(data);
      result.textContent = data;
    }
  } catch (error) {
    console.log(error);
  }
}
fetchData();
