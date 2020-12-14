# Description

A JavaScript Class that can be used to explore the concept of a [Permutation Group](https://en.wikipedia.org/wiki/Permutation_group).

Example:

```
const s3 = new PermutationGroup(3);
s3.initialize();
```

## How are permutations represented in the class?

### As Arrays

First note that a `permutation` in `S_n` acting on the set `{0, 1, ... , n-1}` can be represented as an **array** `sigma` of length `n` containing the integers `0`, `1`, ..., `n-1` given that this array is identified with the permutation that maps `0` to `sigma[0]`, `1` to `sigma[1]`, etc.

For example, the permutations in `S_3` can be represented as

- `[0, 1, 2]`
- `[0, 2, 1]`
- `[1, 0, 2]`
- `[1, 2, 0]`
- `[2, 0, 1]`
- `[2, 1, 0]`

Here, `[0, 1, 2]` is the identity permutation, as it maps `0` to `0`, `1` to `1`, and `2` to `2`. Meanwhile, `[0, 2, 1]` maps `0` to `0`, `1` to `2`, and `2` to `1`.

Example:

```
>> console.log(s3.permutations);
[Array(3), Array(3), Array(3), Array(3), Array(3), Array(3)]
0: (3) [0, 1, 2]
1: (3) [0, 2, 1]
2: (3) [1, 0, 2]
3: (3) [1, 2, 0]
4: (3) [2, 0, 1]
5: (3) [2, 1, 0]
```

### As Integers

Next, note that we can identify each permutation with one of the integers `0`, `1`, ..., (`n! - 1`).

Example:

```
>> console.log(s3.getPermutationArrayFromIndex(1));
[0, 2, 1]

>> console.log(s3.getIndexFromPermutationArray([0, 2, 1]));
1
```

## How does one perform the binary operations?

Suppose that we have two permutations.

```
>> const perm1 = s3.getPermutationArrayFromIndex(4);
>> const perm2 = s3.getPermutationArrayFromIndex(3);
>> console.log({ perm1, perm2 });
perm1: (3) [2, 0, 1]
perm2: (3) [1, 2, 0]
```

We claim that the permutation that results from applying `perm1` followed by `perm2` will be `[0, 1, 2]`. To see this, consider what happens to each element of the set `{0, 1, 2}` under each permutation. For example,:

- Under `perm1`, `0` gets mapped to `2`. After `perm2`, it gets mapped back to `0` (since `0` is at position `2` in `perm2`).

The example above indicates that we should be able to get the image of `0` under the successive transformations with something like `perm2[perm1[0]]`.

Then, in order to represent the permutation that results from applying `perm1` followed by `perm1`, we just need to compute `perm2[perm1[j]]` for each `j` in `{0, 1, ..., n - 1}`.

We can store the result in an array.

Example

```
>> const perm1 = s3.getPermutationArrayFromIndex(4);
>> const perm2 = s3.getPermutationArrayFromIndex(3);
>> console.log(s3.performBinaryOperation(perm1, perm2));

[0, 1, 2]
```

We may also like to perform binary operations from (and to) the index representations of the permutations.

```
>> console.log(s3.performBinaryOperationFromIndices(1, 3));
2
```

The operation performed above indicates that performing the permutation with index `1` (which is `[0, 2, 1]`) followed by the permutation with index `3` (which is `[1, 2, 0]`) results in the permutation with index `2` (which is `[1, 0, 2]` )

## How to compute the Sign of a Permutation?

Consider the [parity of a permutation](https://en.wikipedia.org/wiki/Parity_of_a_permutation). We say that sign of a permutation is +1 if the permutation is even and -1 if the permutation is odd.

Example

```
>> const s5 = new PermutationGroup(5);
>> s5.initialize();
>> console.log(s5.getSign([2, 3, 4, 1, 0]));
-1
```

This indicates that the permutation is odd.
