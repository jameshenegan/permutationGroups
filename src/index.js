import PermutationGroup from "./PermutationGroup";

const s5 = new PermutationGroup(5);
s5.initialize();
console.log(s5.getSign([2, 3, 4, 1, 0]));
