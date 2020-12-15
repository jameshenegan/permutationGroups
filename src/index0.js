import PermutationGroup from "./PermutationGroup";
import BasePlot from "./BasePlot";
import FirstRow from "./FirstRow";
import GenericRow from "./GenericRow";

const numElements = 3;
const arrayOfIndices = [1, 2, 3, 1];
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

const numRows = arrayOfIndices.length + 1;

let j,
  indexOfImagePreTransformation,
  indexOfImagePostTransformation,
  arrayOfImagesPreTransformation,
  arrayOfImagesPostTransformation,
  nextRow;

indexOfImagePostTransformation = 0;

j = 0;

while (j < 4) {
  indexOfImagePreTransformation = indexOfImagePostTransformation;
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
    arrayOfImagesPostTransformation
  );
  nextRow.makePlotData();
  nextRow.initializePlot();
  nextRow.transitionPlot();

  j++;
}
