let object = {
  a: 1,
  b: 2,
  c: 3,
};

for (const keys in object) {
  console.log(`${keys} :${object[keys]}`);
}

let peoples = ["huxn", "alex"];
for (let people of peoples) {
  console.log(peoples);
}
