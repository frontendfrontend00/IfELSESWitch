"use strict";

if (4 == 4) {
  console.log("OK!");
} else {
  console.log("ERROR!");
}

const num = 222;
// if (num < 49) {
//   console.log("Error");
// } else if (num > 100) {
//   console.log("Багато");
// } else {
//   console.log("OK!");
// }

// num === 50 ? console.log("OK!") : console.log("Error");

// працює тільки для перевірки строгої відповідності
switch (num) {
  case 49:
    console.log("No");
    break;
  case 100:
    console.log("No");
    break;
  case 50:
    console.log("Yes");
    break;
  default:
    console.log("NoNOnoNO");
    break;
}
