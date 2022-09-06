function countVowels(str) {
  //vowels are a,e,i,o,u

  let vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;
  let formattedStr = str.toLowerCase().replace(/[^\w]/, "");

  for (let letter of formattedStr) {
    for (let vowel of vowels) {
      if (letter === vowel) {
        counter++;
      }
    }
  }
  console.log(counter);
}

// countVowels("hello There!");
// countVowels("Why do you ask?");
// countVowels("Why?");

function countVowelsMethodTwo(str) {
  //vowels are a,e,i,o,u
  //debugger;
  let vowels = ["a", "e", "i", "o", "u"];
  let formattedStr = str.toLowerCase().replace(/[^\w]/, "");
  let counter = 0;

  for (let char of formattedStr) {
    if (vowels.includes(char)) {
      counter++;
    }
  }
  console.log(counter);
}

countVowelsMethodTwo("hello There!");
countVowelsMethodTwo("Helloooo");
countVowelsMethodTwo("Why?");
countVowelsMethodTwo("Jest");

//using regex
function countVowelsMethodThree(str) {
  let matches = str.match(/[aeiou]/gi);
  //match returns an array if anything matches and null if nothing matches
  console.log(matches);
  console.log(matches ? matches.length : 0);
  return matches ? matches.length : 0;
}

countVowelsMethodThree("hello There!");
countVowelsMethodThree("Why?");
