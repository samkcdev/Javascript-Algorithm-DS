// function reverseInt(val) {
//   if (typeof val === "number") {
//     let number_to_str = val.toString();
//     if (number_to_str[0] === "-") {
//       let arr_int = number_to_str.split("");
//       let negative_symbol = arr_int.shift();
//       arr_int.reverse().unshift(negative_symbol);
//       let reversed_negative_int = arr_int.join("");
//       console.log(parseInt(reversed_negative_int));
//     } else {
//       let reversed_int = number_to_str.split("").reverse().join("");
//       console.log(parseInt(reversed_int));
//     }
//   } else {
//     console.log("Please enter a number");
//   }
// }

// function reverseInt(val) {
//   if (typeof val === "number") {
//     let number_to_str = val.toString();
//     if (val < 0) {
//       let reversed_int = number_to_str.split("").reverse().join("");
//       let number_val = parseInt(reversed_int);
//       console.log(number_val * Math.sign(val));
//     } else {
//       let reversed_int = number_to_str.split("").reverse().join("");
//       console.log(parseInt(reversed_int));
//     }
//   } else {
//     console.log("Please enter a number");
//   }
// }

function reverseInt(val) {
  if (typeof val === "number") {
    let number_to_str = val.toString();
    let reversed_int = number_to_str.split("").reverse().join("");
    let number_val = parseInt(reversed_int);
    console.log(number_val * Math.sign(val));
  } else {
    console.log("Please enter a number");
  }
}

reverseInt(51);
reverseInt(500);
reverseInt(981);
reverseInt(-69);
reverseInt(0);
reverseInt("Sam");
