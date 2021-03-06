import PermutationGroup from "./PermutationGroup";
import BasePlot from "./BasePlot";
import FirstRow from "./FirstRow";
import GenericRow from "./GenericRow";

const timerDelay = 1000;

const numElements = 4;
const arrayOfIndices = [0, 1, 2, 7];
const circleRadius = 40;

// set up the permutation group
const s5 = new PermutationGroup(numElements);
s5.initialize();
console.log(s5);

const arrayOfPermArrays = s5.getArrayOfPermArraysFromArrayOfIndices(
  arrayOfIndices
);

const numPermutations = arrayOfPermArrays.length;

// create the baseplot and the base row
const basePlot = new BasePlot(numPermutations, numElements, circleRadius);
const firstRow = new FirstRow(basePlot);
firstRow.makePlotData();
firstRow.makePlot();

// set up the animation functionality

const numRows = arrayOfIndices.length + 1;

const myFunction = function (j, tempIndexOfImagePostTransformation) {
  let indexOfImagePreTransformation,
    indexOfImagePostTransformation,
    arrayOfImagesPreTransformation,
    arrayOfImagesPostTransformation,
    nextRow;

  indexOfImagePreTransformation = tempIndexOfImagePostTransformation;

  indexOfImagePostTransformation = s5.performBinaryOperationFromIndices(
    indexOfImagePreTransformation,
    arrayOfIndices[j]
  );

  arrayOfImagesPreTransformation = s5.getPermutationArrayFromIndex(
    indexOfImagePreTransformation
  );
  arrayOfImagesPostTransformation = s5.getPermutationArrayFromIndex(
    indexOfImagePostTransformation
  );
  nextRow = new GenericRow(
    basePlot,
    numRows - 1 - j,
    arrayOfImagesPreTransformation,
    arrayOfImagesPostTransformation,
    timerDelay
  );
  nextRow.makePlotData();
  nextRow.initializePlot();
  nextRow.transitionPlot();

  return indexOfImagePostTransformation;
};

let counter = 0;
let indexOfImagePostTransformation = 0;
var intervalID = setInterval(function () {
  indexOfImagePostTransformation = myFunction(
    counter,
    indexOfImagePostTransformation
  );

  counter = counter + 1;

  if (counter === arrayOfIndices.length) {
    window.clearInterval(intervalID);
  }
}, timerDelay);
