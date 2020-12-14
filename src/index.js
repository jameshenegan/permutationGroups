import PermutationGroup from "./PermutationGroup";
import BasePlot from "./BasePlot";
import FirstRow from "./FirstRow";
import GenericRow from "./GenericRow";

const s5 = new PermutationGroup(5);
s5.initialize();

const numPermutations = 2;
const numElements = 5;
const circleRadius = 40;
const basePlot = new BasePlot(numPermutations, numElements, circleRadius);

const firstRow = new FirstRow(basePlot);
firstRow.makePlotData();
firstRow.makePlot();

let prePermutationRowNumber = 2;
let prePermutationArray = [0, 1, 2, 3, 4];
let postPermutationArray = [1, 0, 2, 3, 4];

const secondRow = new GenericRow(
  basePlot,
  prePermutationRowNumber,
  prePermutationArray,
  postPermutationArray
);

secondRow.makePlotData();
secondRow.initializePlot();
secondRow.transitionPlot();

const callBack = function () {
  prePermutationRowNumber = 1;
  prePermutationArray = postPermutationArray;
  postPermutationArray = [4, 3, 2, 1, 0];

  const newRow = new GenericRow(
    basePlot,
    prePermutationRowNumber,
    prePermutationArray,
    postPermutationArray
  );
  newRow.makePlotData();
  newRow.initializePlot();
  newRow.transitionPlot();
};

setTimeout(callBack, 5000);
