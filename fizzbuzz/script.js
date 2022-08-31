function fizzbuzz(n) {
  let countedNumArr = [];
  for (let i = 1; i <= n; i++) {
    // countedNumArr.push(i);
    if (i % 3 === 0 && i % 5) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

  // countedNumArr.forEach((ele, i) => {
  //   if (ele % 3 === 0 && ele % 5 === 0) {
  //     countedNumArr.splice(i, 1, "FizzBuzz");
  //   } else if (ele % 3 === 0) {
  //     countedNumArr.splice(i, 1, "Fizz");
  //   } else if (ele % 5 === 0) {
  //     countedNumArr.splice(i, 1, "Buzz");
  //   }
  // });

  // console.log(countedNumArr.join(","));

  // let string = "";
  // if (i % 3 === 0 && i % 5) {
  //   string = "FizzBuzz";
  // } else if (i % 3 === 0) {
  //   string = "Fizz";
  // } else if (i % 5 === 0) {
  //   string = "Buzz";
  // }
}

fizzbuzz(20);
