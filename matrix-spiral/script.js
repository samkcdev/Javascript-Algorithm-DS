function matrix(n) {
  let parentArr = [];
  let counter = 1;

  for (let l = 0; l < n; l++) {
    let cellArray = [];

    for (let c = 0; c <= n * n; c++) {
      if (cellArray.length !== n) {
        cellArray.push(counter++);
      } else {
        break;
      }
    }

    parentArr.push(cellArray);
  }

  console.log(parentArr);
}

matrix(4);
