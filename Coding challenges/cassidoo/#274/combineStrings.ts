function combineStrings(size: number, ...strings: String[]): String[][] {
  const combined: String[][] = [];
  var current: String[] = [];
  strings.forEach((val, idx, arr) => {
    current.push(val);
    if ((!((idx + 1) % size) && current.length) || idx + 1 === arr.length) {
      combined.push(current);
      current = [];
    }
  });
  return combined;
}

console.log(combineStrings(3, "a", "b", "c", "d", "e"));
console.log(combineStrings(3, "a", "b", "c", "d", "e", "f"));
console.log(combineStrings(3, "a", "b", "c", "d", "e", "f", "g"));
