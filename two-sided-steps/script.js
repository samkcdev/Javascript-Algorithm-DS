function buildPyramidSteps(n) {
  //debugger;
  //find midpoint
  const middle = Math.floor((2 * n - 1) / 2);
  //create first level
  for (let level = 0; level < n; level++) {
    let cellValue = "";
    //create cells
    for (let cell = 0; cell < 2 * n - 1; cell++) {
      //condition that decides where to add value
      //example if n is 3
      //in level0
      // if 2 - 0<= 0 && 2+0>= 0 -- " "
      // if 2 - 0<= 1 && 2+0>= 1 -- " "
      // if 2 - 0<= 2 && 2+0>= 2 -- this where condition true then add #
      // if 2 - 0<= 3 && 2+0>= 3 -- " "
      // if 2 - 0<= 4 && 2+0>= 4 -- " "

      if (middle - level <= cell && middle + level >= cell) {
        cellValue += "#";
      } else {
        cellValue += " ";
      }
    }
    console.log(cellValue);
  }
}

buildPyramidSteps(3);
