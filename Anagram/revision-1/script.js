function anagramFinder(subject, anagram) {
  //convert the subject and anagram to lowercase
  // let formattedSubject = subject.replace(/[^\w]/g, "").toLowerCase();
  // let formattedAnagram = anagram
  //   .toLowerCase()
  //   .replace(/[^\w]/g, "")
  //   .toLowerCase();
  // console.log(lowerCaseSubject);
  // .replace(/\s/g, "")
  // .replace(/\W/g, "");

  let subjectMap = mapGenerator(formattedSubject);
  let anagramMap = mapGenerator(formattedAnagram);

  // for (subjectkey in subjectMap) {
  //   for (anagramkey in anagramMap) {
  //     if (anagramMap[subjectkey] || subjectkey[anagramkey]) {
  //       if (subjectMap[subjectkey] == anagramMap[subjectkey]) {
  //         console.log(
  //           `Values ${subjectMap[subjectkey]} == ${anagramMap[subjectkey]}`
  //         );
  //         console.log(
  //           `First ${subjectMap[subjectkey] == anagramMap[subjectkey]}`
  //         );
  //       } else if (anagramMap[anagramkey] == subjectMap[anagramkey]) {
  //         console.log(
  //           `Second ${anagramMap[anagramkey] == subjectMap[anagramkey]}`
  //         );
  //         return true;
  //       } else {
  //         console.log(`Sorry`);
  //         return false;
  //       }
  //     }
  //   }
  // }
  if (Object.keys(subjectMap).length !== Object.keys(anagramMap).length) {
    return false;
  }

  for (key in subjectMap) {
    if (subjectMap[key] !== anagramMap[key]) {
      return false;
    }
  }

  return true;
}

function mapGenerator(strOne) {
  let mapOfStr = {};
  let formattedStr = formatStr(strOne);
  //create a map for subject
  for (char of formattedStr) {
    if (!mapOfStr[char]) {
      mapOfStr[char] = 1;
    } else {
      mapOfStr[char]++;
    }
  }
  return mapOfStr;
}

function formatStr(str) {
  return str.replace(/[^\w]/g, "").toLowerCase();
}

//method #2
function anagramFinderTwo(subject, anagram) {
  formatStrTwo(subject);
  formatStrTwo(anagram);
  console.log(formatStrTwo(subject) === formatStrTwo(anagram));
  return formatStrTwo(subject) === formatStrTwo(anagram);
}

function formatStrTwo(str) {
  console.log(
    str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
  );
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

//anagramFinder("rail safety", "fairy tales");
// anagramFinder("RAIL! SAFETY!", "fairy tales");
anagramFinderTwo("RAIL! SAFETY!", "fairy tales");
//anagramFinderTwo("dfsasdfasfdfadsf sfda!", "fairy tales");
