//given a string check if its a palindrome

function strReversal(str) {
  return str.toLowerCase().split("").reverse().join("");
}

function checkPalindrome(str) {
  let reversed = strReversal(str);
  if (reversed === str.toLowerCase()) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}

checkPalindrome("Amma");
checkPalindrome("racecar");
checkPalindrome("ddduff");
