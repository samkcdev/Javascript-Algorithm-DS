//solution #1
function reverseOne(str) {
  console.log(str.split("").reverse().join(""));
  return str.split("").reverse().join("");
}

reverseOne("sam");

//solutin#2

function reverseTwo(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  console.log(reversed);
}
reverseTwo("sam");

//solution#3

function reverseThree(str) {
  let reversed = str.split("").reduce((reverse, char) => {
    return char + reverse;
  }, "");
  console.log(reversed);
  resultEle.innerHTML = reversed;
}

// reverseThree("sam");

let inputEleVal = document.querySelector("input");
console.log(inputEleVal);
let buttonEle = document.querySelector("button");
let resultEle = document.querySelector(".result");

buttonEle.addEventListener(
  "click",
  () => {
    reverseThree(inputEleVal.value);
  },
  false
);
