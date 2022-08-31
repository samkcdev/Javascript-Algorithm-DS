function chunking(arr, n) {
  let outputArr = [];
  let index = 0;
  while (index < arr.length) {
    let slicedarrLength = arr.slice(index, index + n).length;
    let slice = arr.slice(index, index + n);
    index += slicedarrLength;
    outputArr.push([slice]);
  }

  // let sliceSecond = arr.slice(n);

  console.log(outputArr);

  // console.log(arr);
}

chunking([1, 2, 3, 4], 2);
chunking([1, 2, 3, 4, 5], 2);

// One Possible solution

// function chunking(arr, n) {
//   let chunkedarr = [];

//   // console.log(chunkedarr.length - 1);
//   // console.log(chunkedarr.indexOf(chunkedarr.length - 1));
//   arr.forEach((element) => {
//     let lastChunkEle = chunkedarr[chunkedarr.length - 1];
//     console.log(typeof lastChunkEle);
//     //console.log(!chunkedarr[lastChunkedval]);
//     if (!lastChunkEle || chunkedarr.length === n) {
//       chunkedarr.push([element]);
//     } else {
//       lastChunkEle.push(element);
//     }
//   });
//   console.log(chunkedarr);
// }
// chunking([1, 2, 3, 4], 2);

// chunking([1, 2, 3, 4, 5], 2);
