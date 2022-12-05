import { readFile } from "../readFile";

export function part1(content: string) {
  let sum = 0;
  content.split("\n").forEach((rucksack) => {
    const first = rucksack.substring(0, rucksack.length / 2);
    const second = rucksack.substring(rucksack.length / 2);

    const identicalLetter = identLetter(first, second);
    sum += getPrio(identicalLetter);
  });
  console.log(sum);
}

export function part2(content: string) {
  const rucksacks = content.split("\n");
  let group: string[] = [];
  let sum = 0;
  rucksacks.forEach((sack, idx) => {
    if (group.length != 3) {
      group.push(sack);
      if (idx !== rucksacks.length - 1) {
        return;
      }
    }

    let idents = identLetters(group[0], group[1]);
    const list = [...idents];
    for (const letter of list) {
      if (
        !identLetters(group[1], group[2]).includes(letter) ||
        !identLetters(group[0], group[2]).includes(letter)
      ) {
        idents = idents.filter((curr) => curr !== letter);
      }
    }

    sum += getPrio(idents[0]);

    // reset group
    group = [];
    // push first of next group
    group.push(sack);
  });
  console.log(sum);
}

function identLetter(half1: string, half2: string) {
  for (const letter of half1.split("")) {
    if (half2.includes(letter)) return letter;
  }
  throw new Error("Nope");
}

function identLetters(first: string, sec: string) {
  let identical: string[] = [];
  for (const letter of first.split("")) {
    if (sec.includes(letter)) identical.push(letter);
  }
  return identical;
}

function getPrio(letter: string) {
  if (letter.toUpperCase() === letter) {
    return letter.charCodeAt(0) - 38;
  } else {
    return letter.charCodeAt(0) - 96;
  }
}
// part1(readFile("./sample.input"));
// part1(readFile("./real.input"));
// part2(readFile("./sample.input"));
part2(readFile("./real.input"));
