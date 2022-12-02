import { readFileSync } from "fs";
export function readFile(fileName: string): string {
  return readFileSync(fileName, { encoding: "utf-8" });
}

export function calorieCount(filename: string) {
  const elves = readFile(filename).split("\n\n");

  let maxCals = 0;
  elves.forEach((elf: string, id: number) => {
    const calories = elf
      .split("\n")
      .reduce((acc: number, curr: string) => acc + parseInt(curr), 0);
    if (calories > maxCals) maxCals = calories;
  });
  console.log(maxCals);
}

export function top3CalCount(content: string) {
  const elves = content.split("\n\n");
  let allCals: number[] = [];
  elves.forEach((elf: string, id: number) => {
    const calories = elf
      .split("\n")
      .reduce((acc: number, curr: string) => acc + parseInt(curr), 0);
    console.log(allCals, calories);

    if (allCals.length >= 3 && allCals[2] < calories) {
      allCals.pop();
      allCals.push(calories);
    }
    if (allCals.length < 3) {
      allCals.push(calories);
    }

    allCals = allCals.sort((a, b) => b - a);
  });
  console.log(allCals.reduce((acc, curr) => acc + curr, 0));
}
// console.log(calorieCount("./sample.input"));
// console.log(calorieCount("./real.input"));
// console.log(top3CalCount(readFile("./sample.input")));
console.log(top3CalCount(readFile("./real.input")));
