function maxChar(str) {
  let myStringObj = {};

  let max = 0;
  let char = "";

  // loop through the string using for..of
  // check if string value is available in the object
  // if not it will return a undefined using !we turn it into true
  // if not there then add that key with a 1 value
  // if its already there add 1 to that

  for (let string of str) {
    if (!myStringObj[string]) {
      myStringObj[string] = 1;
    } else {
      myStringObj[string]++;
    }
  }

  // the above loop will give us a character object
  // loop through that object using for..in
  // then init a variable at the top with max =0
  // char a empty string
  // compare if the current value of the object is more than the max value
  // if yes then max value becomes that
  // and the char variable gets that property

  for (let property in myStringObj) {
    if (myStringObj[property] > max) {
      max = myStringObj[property];
      char = property;
    }
  }
  console.log(char);
}

maxChar("abccccccd");
maxChar("Hello There");

//aside : finding the max value from an array

let arrWithNum = [13, 45, 55, 100, 250, 40, 10];
//there should be this initialization for comparison
let max = 0;

for (num of arrWithNum) {
  if (num > max) {
    max = num;
  }
}

console.log("max", max);
