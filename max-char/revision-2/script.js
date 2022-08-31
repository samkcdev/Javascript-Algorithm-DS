function charMap(str) {
  let mapObj = {};

  for (char of str) {
    if (!mapObj[char]) {
      mapObj[char] = 1;
    } else {
      mapObj[char]++;
    }
  }

  console.table(mapObj);
  getMaxChar(mapObj);
}

function getMaxChar(obj) {
  let maxVal = 0;
  let maxChar = "";
  for (key in obj) {
    if (obj[key] > maxVal) {
      maxVal = obj[key];
      maxChar = key;
    }
  }
  console.log(maxChar);
  return maxChar;
}

charMap("abccccdddddddf");
