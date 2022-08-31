function capitalize(str) {
  let strToArr = str.split(" ");
  let capitalisedStr = [];
  for (let singleStr of strToArr) {
    if (singleStr.length == 1) {
      let upperCase = singleStr.toUpperCase();
      capitalisedStr.push(upperCase);
    } else {
      let upperCase = singleStr[0].toUpperCase();
      let wholeString = singleStr.replace(singleStr[0], upperCase);
      capitalisedStr.push(wholeString);
    }
  }
  console.log(capitalisedStr.join(" "));
}

// capitalize("a lazy is a fox");
// capitalize("look, it is working!");

function capitalizeTwo(str) {
  let strSplit = str.split(" ");

  let capitalised = strSplit
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");

  console.log(capitalised);
}

capitalizeTwo("a lazy is a fox");
capitalizeTwo("look, it is working!");

function capitalizeThree(str) {
  let strToArr = str.split(" ");
  let capitalisedStr = [];
  for (let singleStr of strToArr) {
    capitalisedStr.push(singleStr[0].toUpperCase() + singleStr.slice(1));
  }
  console.log(capitalisedStr.join(" "));
}

capitalizeThree("a lazy is a fox");
capitalizeThree("look, it is working!");
