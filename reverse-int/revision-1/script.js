function reverseOne(int) {
  let numberString = int.toString();
  if (int > 0) {
    let reversedVal = numberString.split("").reverse().join("");
    //console.log(+reversedVal);
    console.log(parseInt(reversedVal));
  } else {
    let arrayFromStr = numberString.split("");
    let negativeSymbol = arrayFromStr.shift();
    let reversed = arrayFromStr.reverse();
    reversed.unshift(negativeSymbol);
    console.log(parseInt(reversed.join("")));
  }
}
reverseOne(-50);
reverseOne(-500);
reverseOne(-75852);

function reversedOutput(val) {
  return val.split("").reverse().join("");
}

function reverseTwo(int) {
  let numberString = int.toString();
  let reversedVal = reversedOutput(numberString);
  if (int > 0) {
    //console.log(+reversedVal);
    console.log(parseInt(reversedVal));
  } else {
    console.log(`${reversedVal}`);
    console.log(parseInt(`-${reversedVal}`));
  }
}

reverseTwo(-599);
reverseTwo(599);

function reverseThree(val) {
  let numberString = val.toString();
  let reversedVal = reversedOutput(numberString);
  parseInt(reversedVal) * Math.sign(val);
  debugger;
}

reverseThree(-896);
