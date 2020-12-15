class PermutationGroup {
  constructor(numElements) {
    this.numElements = numElements;
    this.setOfElements = [];
    this.permutations = [];
    this.JSONpermutations = [];
  }

  initialize() {
    this.makeSet();
    this.permutations = this.makePermutations(this.setOfElements);
    this.makeJSONpermutations();
  }

  getArrayOfPermArraysFromArrayOfIndices(arrayOfIndices) {
    const arrayOfPermArrays = [];
    arrayOfIndices.forEach((index) =>
      arrayOfPermArrays.push(this.getPermutationArrayFromIndex(index))
    );
    return arrayOfPermArrays;
  }

  getSign(permArray) {
    const numEvenLengthCycles = this.getNumberOfEvenLengthCycles(permArray);
    let toReturn;
    numEvenLengthCycles % 2 === 0 ? (toReturn = 1) : (toReturn = -1);
    return toReturn;
  }

  getNumberOfEvenLengthCycles(permArray) {
    let elementsToConsider = this.getElementsToConsider(permArray);
    //console.log("Which elements moved?");
    //console.log(elementsToConsider);
    let numOfEvenLengthCycles = 0;

    while (elementsToConsider.length > 0) {
      let elementWentHere = -1;

      // begin by forming a chain with  the first item on our list of items to consider.]
      // keep track of where we start (this is where we end)
      const whereWeStarted = elementsToConsider[0];
      // keep track of the number of elements considered
      let numConsidered = 0;
      let currentElementToConsider = elementsToConsider[0];

      while (elementWentHere !== whereWeStarted) {
        //console.log("Current elment to consider: ");
        //console.log(currentElementToConsider);
        // whenever we consider a new item, remove that item from the list.
        elementWentHere = this.whereDidElementGo(
          currentElementToConsider,
          permArray
        );
        //console.log("Element went here:");
        //console.log(elementWentHere);
        elementsToConsider = this.removeElement(
          elementsToConsider,
          elementWentHere
        );
        numConsidered++;
        //console.log("Elements left to consider:");
        //console.log(elementsToConsider);
        currentElementToConsider = elementWentHere;
      }

      if (numConsidered % 2 == 0) {
        numOfEvenLengthCycles++;
      }
    }
    return numOfEvenLengthCycles;
  }

  whereDidElementGo(element, permArray) {
    return permArray[element];
  }

  removeElement(elementsToConsider, valueToRemove) {
    return elementsToConsider.filter((element) => element !== valueToRemove);
  }

  getElementsToConsider(permArray) {
    const elementsToConsider = [];
    for (let j = 0; j < permArray.length; j++) {
      if (permArray[j] !== j) {
        elementsToConsider.push(j);
      }
    }
    return elementsToConsider;
  }

  performBinaryOperationFromIndices(index1, index2) {
    const perm1 = this.getPermutationArrayFromIndex(index1);
    const perm2 = this.getPermutationArrayFromIndex(index2);
    const product = this.performBinaryOperation(perm1, perm2);
    return this.getIndexFromPermutationArray(product);
  }

  performBinaryOperation(perm1, perm2) {
    const toReturn = [];
    for (let j = 0; j < this.numElements; j++) {
      toReturn.push(perm2[perm1[j]]);
    }
    return toReturn;
  }

  getPermutationArrayFromIndex(index) {
    return this.permutations[index];
  }

  getIndexFromPermutationArray(array) {
    return this.JSONpermutations.indexOf(JSON.stringify(array));
  }

  makeJSONpermutations() {
    const JSONpermutations = [];
    this.permutations.forEach((permutation) =>
      JSONpermutations.push(JSON.stringify(permutation))
    );
    this.JSONpermutations = JSONpermutations;
  }

  // https://www.30secondsofcode.org/js/s/permutations
  makePermutations(arr) {
    if (arr.length <= 2)
      return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    return arr.reduce(
      (acc, item, i) =>
        acc.concat(
          this.makePermutations([
            ...arr.slice(0, i),
            ...arr.slice(i + 1),
          ]).map((val) => [item, ...val])
        ),
      []
    );
  }

  makeSet() {
    const setOfElements = [];
    for (let j = 0; j < this.numElements; j++) {
      setOfElements.push(j);
    }
    this.setOfElements = setOfElements;
  }
}

export default PermutationGroup;
