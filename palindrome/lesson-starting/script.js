function palindrome(str) {
  let str_lowercase = str.toLowerCase();
  // let reversed_str = str_lowercase.split("").reverse().join("");

  // if (reversed_str == str_lowercase) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }

  let arr_str = str_lowercase.split("");

  // let palindrome_val = arr_str.every(function (ele, i) {
  //   return ele === arr_str[arr_str.length - i - 1];
  // });

  let palindrome_val = arr_str.every((ele, i) => {
    return ele === arr_str[arr_str.length - i - 1];
  });

  console.log(palindrome_val);
}

palindrome("saippuakivikauppias");
// palindrome("civic");
// palindrome("sam");
// palindrome("asdfasfd");
palindrome("Sator Arepo Tenet Opera Rotas");
