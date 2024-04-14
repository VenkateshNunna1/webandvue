fetch("text.txt")
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.text();
    }
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((error) => {
    return error;
  });
