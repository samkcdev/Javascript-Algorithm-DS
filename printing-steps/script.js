// function creatingSteps(n) {
//   //debugger;
//   let symbolHolder = "";

//   let increment = 0;
//   while (increment < n) {
//     symbolHolder += "#";
//     console.log(symbolHolder);

//     increment++;
//   }
// }

// //creatingSteps(3);
// creatingSteps(10);

//think in terms of a array with row and column
function creatingStepsOne(n) {
  //debugger;
  for (let row = 0; row < n; row++) {
    let step = "";
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        step += "|#";
      } else {
        step += " ";
      }
    }
    console.log(step + rightLine);
  }
}

// creatingStepsOne(3);
//creatingStepsOne(100);

// function creatingStepsBox(n) {
//   let rowParent = document.querySelector(".row-parent");
//   //debugger;
//   for (let row = 0; row < n; row++) {
//     let step = "";
//     let cellParent = document.createElement("div");
//     for (let col = 0; col < n; col++) {
//       let spanCell = document.createElement("span");
//       if (col <= row) {
//         spanCell.className = "row-cell-filled";
//         step += "#";
//       } else {
//         spanCell.className = "row-cell-empty";
//         step += " ";
//       }
//       cellParent.appendChild(spanCell);
//     }
//     rowParent.appendChild(cellParent);
//     console.log(step);
//   }
// }

// creatingStepsBox(10);

// let row = 0;
// let step = "";
// function creatingStepsTwoRecursion(n, row = 0, step = "") {
//   debugger;
//   if (n === row) {
//     return;
//   }

//   if (n === step.length) {
//     console.log(step);
//     creatingStepsTwoRecursion(n, row + 1);
//     return;
//   }

//   if (step.length <= row) {
//     step += "#";
//   } else {
//     step += " ";
//   }

//   creatingStepsTwoRecursion(n, row, step);
// }

// creatingStepsTwoRecursion(4);

//same soltuion using recursion

// function stepsInRecursion(n, currentRow = 0, cells = "") {
//   //so rows created should be equal to n
//   //once u reach n stop
//   if (n === currentRow) {
//     return;
//   }

//   //create a new row
//   //reset the cell value to default
//   if (n === cells.length) {
//     //print the already created row with cells
//     console.log(cells);
//     stepsInRecursion(n, currentRow + 1);
//     return;
//   }

//   //adding content to cell in the row
//   if (cells.length <= currentRow) {
//     let spanCell = document.createElement("span");
//     cells += "#";
//   } else {
//     cells += " ";
//   }

//   stepsInRecursion(n, currentRow, cells);
// }

// stepsInRecursion(10);

// function createBlocks(n, row = 0, cells = "") {
//   let rowParent = document.querySelector(".row-parent");
//   var spanCell = document.createElement("span");
//   if (n === row) {
//     return;
//   }

//   //filling the cell with data
//   if (cells.length <= row) {
//     spanCell.className = "row-cell-filled";
//     cells += "#";
//   } else {
//     spanCell.className = "row-cell-empty";
//     cells += " ";
//   }

//   if (n === cells.length) {
//     let cellParent = document.createElement("div");
//     cellParent.appendChild(spanCell);
//     rowParent.appendChild(cellParent);
//     return createBlocks(n, row + 1);
//   }

//   createBlocks(n, row, cells);
// }

// createBlocks(10);
