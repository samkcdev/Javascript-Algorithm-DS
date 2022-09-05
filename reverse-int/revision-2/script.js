function reverseInt(n) {
  let reversedInt = formatAndReverseNumber(n);
  if (n < 0) {
    console.log(parseInt("-" + reversedInt));
    return parseInt(reversedInt);
  } else {
    console.log(parseInt(reversedInt));
    return parseInt(reversedInt);
  }
}

//n to string
//its better to create a helper function like this
function formatAndReverseNumber(val) {
  let numberToString = val.toString();
  return numberToString.split("").reverse().join("");
}

// reverseInt(-35058987);
// reverseInt(35058987);
// reverseInt(007);
// reverseInt(700);

function revresedIntTwo(val) {
  let reversedInt = formatAndReverseNumber(val);
  console.log(parseInt(reversedInt) * Math.sign(val));
  return parseInt(reversedInt) * Math.sign(val);
}

revresedIntTwo(-35058987);
revresedIntTwo(007);
revresedIntTwo(700);
