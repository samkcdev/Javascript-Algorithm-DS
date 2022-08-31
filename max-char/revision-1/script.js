function maxChar(str) {
  let mappedObj = {};
  //dont have to split to array
  //let strArr = str.split("");
  //we can directly loop the string

  for (let char of str) {
    if (!mappedObj[char]) {
      mappedObj[char] = 1;
    } else {
      mappedObj[char]++;
    }
  }
  getMaxCharFromMap(mappedObj);
}

function getMaxCharFromMap(mapObj) {
  let keys = Object.keys(mapObj);
  let maxChar = keys.reduce((firstKey, nextKey) => {
    return mapObj[firstKey] > mapObj[nextKey] ? firstKey : nextKey;
  });

  console.log(maxChar);
  return maxChar;
}

//another technique
function getMaxCharFromMapTwo(mapObj) {
  let maxVal = 0;
  let maxChar = "";
  for (let key in mapObj) {
    if (mapObj[key] > max) {
      maxVal = mapObj[key];
      maxChar = key;
    }
  }
}

let randomStr = "apple 1231111";

maxChar(randomStr);
