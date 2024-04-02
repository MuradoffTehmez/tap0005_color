let students = [
  {
    id: 1,
    name: "Ayise",
    surname: "Ehmedova",
    mark: 96,
  },
  {
    id: 2,
    name: "Nurlan",
    surname: "Quliyev",
    mark: 45,
  },
  {
    id: 3,
    name: "Kazim",
    surname: "Ekberov",
    mark: 92,
  },
  {
    id: 4,
    name: "Rza",
    surname: "Haciyev",
    mark: 8,
  },
];

console.log(students);
let total = 0;
students.map((student) => {
  total += student.mark;
//   console.log(`${student.name} ${student.surname}`);
});

let average = total / students.length;

console.log(`Telebelerin ortalamasi: ${average}`);

let looser = [];
students
  .filter((student) => student.mark < 90)
  .map((student) => {
    looser.push(`${student.name} ${student.surname}`);
  });
console.log(`Xeberdarliq !!! ${looser}.`);

// http://10.10.10.119:5500/trendyol/api/paltar/42
//     11            42              34                 3
// product       product          product           product

//          id:4 group_id: 7                  id:9  group_id: 11
// stundets stundent                     student
//        id: 11    id: 7
// groups group group

// stundent.group_id === group.id

// New lesson

function sayHello() {
  console.log("Hello world");
}

setInterval(sayHello, 1000);
setTimeout(sayHello, 1000);

let a = 1;
const sdsd = setInterval(() => {
  if (a === 15) {
    clearInterval(sdsd)
  }
  console.log(a++);
}, 300);

let date = new Date();
console.log(date);
let il = date.getFullYear();
console.log(il);
let ay = date.getMonth();
console.log(ay);
let gun = date.getDay();
console.log(gun);
let saniye = date.getSeconds();
console.log(saniye);
let saat = date.getHours();
console.log(saat);
let deqiqe = date.getMinutes();
console.log(deqiqe);

let brithday = new Date("03-28-2024");
setInterval(() => {
  let now = new Date();
  let between = now - brithday;
  let saniye = Math.trunc(between / 1000) % 60;
  let deqiqe = Math.trunc((between / (1000 * 60)) % 60);
  let saat = Math.trunc((between / (1000 * 60 * 60)) % 24);
  let gun = Math.trunc(between / (1000 * 60 * 60 * 24));
  //   console.clear();
  console.log(`${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`);
}, 1000);
// let il = Math.trunc(between / (1000 * 60 * 60 * 24 * 365));
// console.log(saniye, deqiqe, saat, gun, il);
//  4 gun 11 saat 33 deq 12 saniye

// console.log("%cHello world", "color:red; font-size:34px;");
