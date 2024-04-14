let arr = [5, 55, 89, 65, 33, 22, 1];
let b = arr.filter((items) => {
  return items % 5 == 0;
});
console.log(b);

let songs = [
  {
    song: "tiger hukam",
    duration: 3.67,
  },
  {
    song: "na ready dha varam",
    duration: 3.7,
  },
  {
    song: "dhum masala birayani",
    duration: 2.67,
  },
];
let song1 = songs.filter((song) => {
  return song.duration > 3;
});
console.log(song1);

let computer = [
  { ram: 4, sdd: 100 },
  { ram: 8, sdd: 200 },
  { ram: 16, sdd: 300 },
  { ram: 32, sdd: 400 },
  { ram: 64, sdd: 500 },
];
let comp = computer.filter((comp) => {
  return comp.ram <= 16;
});
console.log(comp);
let ages = [67, 89, 45, 2, 3, 4, 90, 3, 4, 27, 2, 2];
let age = ages.filter((age) => {
  return age >= 18;
});
console.log(age);

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
let word = words.filter((word) => {
  return word.length >= 6;
});
console.log(word);

let cricketTestRuns = [
  {
    name: "virat",
    runs: 14567,
    age: 35,
  },
  {
    name: "rohit",
    runs: 5678,
    age: 37,
  },
  {
    name: "rishab",
    runs: 4567,
    age: 25,
  },
];

let result = cricketTestRuns.filter((items) => {
  return items.age < 35;
});
console.log(result);

const words3 = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

let result3 = words3.filter((item) => {
  return item.length > 6;
});
console.log(result3);
