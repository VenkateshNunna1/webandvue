const result = document.querySelector(".result");

async function renderData() {
  try {
    const response = await fetch("ganesh.json");
    if (!response.ok) {
      throw Error((result.textContent = response.status));
    } else {
      const data = await response.json();
      result.textContent = data.id;
      result.textContent = data.name;
      result.textContent = data.mobilenumber;
    }
  } catch (error) {
    console.log(error);
  }
}
renderData();
