//method-1- Object maps
function anagramFinder(subject, anagram) {
  //create two maps from the strings passed
  let subjectMap = createMaps(subject);
  let anagramMap = createMaps(anagram);

  if (Object.keys(subjectMap).length !== Object.keys(anagramMap).length) {
    console.log("not anagram");
    return false;
  }

  for (let letter in subjectMap) {
    if (subjectMap[letter] !== anagramMap[letter]) {
      console.log("not anagram");
      return false;
    }
  }
  console.log("anagram");
  return true;
}

function createMaps(str) {
  let formattedstr = str.toLowerCase().replace(/[^\w]/g, "");
  let map = {};
  for (let word of formattedstr) {
    if (!map[word]) {
      map[word] = 1;
    } else {
      map[word] + 1;
    }
  }

  return map;
}

//anagramFinder("RAIL! SAFETY!", "fairy tales");
anagramFinder("RAIL!", "fairy tales");
