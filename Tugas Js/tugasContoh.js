// if,else,nested if
console.log("If-else:");
let jam = 14;
if (jam < 14) {
  console.log("Sesi pagi belum berakhir");
} else {
  console.log("Sesi siang dimulai");
}

console.log("Nested-if:");
let SI = "web";

if (SI == "web") {
  console.log("Ini program web development");
} else if (SI == "mobile") {
  console.log("Ini program mobile development");
} else if (SI == "game") {
  console.log("Ini program game development");
} else {
  console.log("Kayaknya program magang, deh");
}
console.log("==============================");
// switch case
console.log("Switch-case:");
let pesan = 4;
switch (pesan) {
  case 1:
    console.log("Buah Alpukat");
    break;
  case 2:
    console.log("Buah Mangga");
    break;
  case 3:
    console.log("Buah Jeruk");
    break;
  case 4:
    console.log("Buah Naga");
    break;
  case 5:
    console.log("Buah Anggur");
    break;
  default:
    console.log("Bukan buah apa-apa");
}
console.log("==============================");

// for statement
//contoh 1 for
console.log("Contoh for 1:");
let jml = 0;
for (let i = 1; i <= 10; i++) {
  jml += i;
}
console.log("Jumlah semua bilangan : " + jml);

// contoh 2 for
console.log("Contoh for 2:");
for (let jari = 1.0; jari <= 2.0; jari += 0.2) {
  console.log("Radius =" + jari + " Luas= " + jari * Math.PI * jari);
}
console.log("==============================");
// while, do while
console.log("While:");
let r = 0;
while (r < 0.72) {
  r = Math.random();
  console.log(r);
}
console.log("Do-while:");
let x = 1;
do {
  console.log("" + x);
  x++;
} while (x <= 15);
console.log("==============================");
// function
alert("Hai ini adalah contoh function");

function sayHello() {
  alert("Hai! Nama saya Nisa");
}
