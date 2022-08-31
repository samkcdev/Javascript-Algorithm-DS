function reverseStr(str) {
  //console.log(str.toLowerCase().split("").reverse().join(""));
  return str.toLowerCase().split("").reverse().join("");
}

function checkPalindromeOne(str) {
  //using if statement
  // if (str.toLowerCase() !== reverseStr(str)) {
  //   console.log("string is not palindrome");
  //   return false;
  // } else {
  //   console.log("string is palindrome");
  //   return true;
  // }

  //using directly comparing
  let checkpali = str.toLowerCase() === reverseStr(str);
  console.log(checkpali);
  return checkpali;
}

// checkPalindromeOne("abscedeasfga");
// checkPalindromeOne("amma");
checkPalindromeOne("Anna");

//second solution
function checkPalindromeTwo(str) {
  let lowercaseStr = str.toLowerCase();
  let result = lowercaseStr.split("").every((ele, index) => {
    return ele == lowercaseStr[lowercaseStr.length - 1 - index];
  });

  console.log(result);
}

checkPalindromeTwo("Anna");
checkPalindromeTwo("asfasdfafasfasfasdf");
