function reverseInt(int) {
  if (typeof int === "number") {
    let numberToStr = int.toString();
    let reversedStr = numberToStr.split("").reverse().join("");
    let finalOutput = parseInt(reversedStr);
    console.log(finalOutput * Math.sign(int));
  }
}

reverseInt(65);
reverseInt(-8956);
