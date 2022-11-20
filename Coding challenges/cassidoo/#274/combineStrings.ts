function combineStrings(arr: string[], maxSize: number) {
  let current = "";
  const result: string[] = [];
  arr.forEach((val) => {
    if (current === "") {
      current = val;
    } else if (current.length + val.length + 1 <= maxSize) {
      current = current.concat(" ").concat(val);
    } else {
      result.push(current);
      current = val;
    }
  });
  result.push(current);
  return result;
}

function combineStringsRemoveTooLongOnes(arr: string[], maxSize: number) {
  let current = "";
  const result: string[] = [];
  arr.forEach((val) => {
    if (val.length > maxSize) {
      return;
    }
    if (current === "") {
      current = val;
    } else if (current.length + val.length + 1 <= maxSize) {
      current = current.concat(" ").concat(val);
    } else {
      result.push(current);
      current = val;
    }
  });
  result.push(current);
  return result;
}

console.log(combineStrings(["a", "b", "c", "d", "e"], 5));
console.log(combineStrings(["a", "b", "c"], 10));
console.log(combineStrings(["a", "b", "c"], 5));
console.log(combineStrings(["alpha", "beta", "gamma"], 4));

console.log(combineStringsRemoveTooLongOnes(["a", "b", "c", "d", "e"], 5));
console.log(combineStringsRemoveTooLongOnes(["a", "b", "c"], 10));
console.log(combineStringsRemoveTooLongOnes(["a", "b", "c"], 5));
console.log(combineStringsRemoveTooLongOnes(["alpha", "beta", "gamma"], 4));
