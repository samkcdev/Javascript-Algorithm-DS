//given a string return the reverse of the string

function report(input) {
  console.log(input);
}

//get the string in an variale
//we need convert this string into a array using split() method
//why? to get access to a method in array called reverse()
//once its reversed we can join to get a single string
// we use join method to get that

let userString = "Sam is coding";

function reverse(str) {
  let reversedString = str.split("").reverse().join("");
  report(reversedString);
  return reversedString;
}

reverse(userString);

//solution #2

function reverseTwo(str) {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
    //debugger;
  }

  report(reversed);
  return reversed;
}

reverseTwo(userString);

//reduce method

let numbers = [1, 2, 3, 4];

let reducedval = numbers.reduce((prevVal, currentVal) => {
  return prevVal + currentVal;
});

report(reducedval);

function reverseThree(str) {
  let reversed = str.split("").reduce((reverseval, currentChar) => {
    return currentChar + reverseval;
  }, "");
  report(reversed);
}

reverseThree("sam");
