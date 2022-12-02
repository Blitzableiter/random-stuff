import { readFile } from "../readFile";

export function part1(content: string) {
  const results: {
    wins: { [key: string]: string };
    loses: { [key: string]: string };
  } = {
    wins: {
      X: "C",
      Y: "A",
      Z: "B",
    },
    loses: {
      X: "B",
      Y: "C",
      Z: "A",
    },
  };

  const scores: { [key: string]: number } = {
    X: 1,
    Y: 2,
    Z: 3,
  };

  const games = content.split("\n");
  let totalScore = 0;
  games.forEach((game) => {
    const [opp, my] = game.split(" ");
    let score = 0;
    if (results.wins[my] == opp) {
      score += 6;
    } else if (results.loses[my] === opp) {
      score += 0;
    } else {
      score += 3;
    }
    score += scores[my];
    console.log(score);
    totalScore += score;
  });
  console.log(totalScore);
}

export function part2(content: string) {
  const res: { [key: string]: string } = {
    X: "lose",
    Y: "draw",
    Z: "win",
  };
  const pickTo: {
    [key: string]: { [key: string]: number };
  } = {
    lose: {
      A: 3,
      B: 1,
      C: 2,
    },
    win: {
      A: 2,
      B: 3,
      C: 1,
    },
    draw: {
      A: 1,
      B: 2,
      C: 3,
    },
  };
  const games = content.split("\n");
  let totalScore = 0;
  games.forEach((game) => {
    const [opp, result] = game.split(" ");
    totalScore += pickTo[res[result]][opp];
    if (result === "X") {
      totalScore += 0;
    } else if (result === "Y") {
      totalScore += 3;
    } else {
      totalScore += 6;
    }
  });
  console.log(totalScore);
}
// part1(readFile("./sample.input"));
// part1(readFile("./real.input"));
// part2(readFile("./sample.input"));
part2(readFile("./real.input"));
