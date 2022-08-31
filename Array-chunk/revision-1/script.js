function chunking(arr, val) {
  // debugger;
  let parentArr = [];
  for (let i = arr.length; i == arr.length; i -= val) {
    let chunkarr = arr.splice(0, val);
    parentArr.push(chunkarr);
  }

  console.log(parentArr);
}

chunking([1, 2, 3, 4, 5, 6, 7, 8], 2);

//arr.length(5) ; arr.length <= arr.length;i-2
//arr.length(3);3<=arr.length;i-2
//arr.length(1);1<=arr.length;i-2

function chunkingUsingSplice(arr, val) {
  //debugger;
  let parentArr = [];
  let index = 0;
  while (index < arr.length) {
    let oneChunk = arr.slice(index, index + val);
    parentArr.push(oneChunk);
    index += val;
  }
  console.log(parentArr);
}

chunkingUsingSplice([1, 2, 3, 4, 5, 6, 7, 8], 2);
