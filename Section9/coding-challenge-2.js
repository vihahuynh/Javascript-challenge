const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...players) {
    for (let i = 0; i < players.length; i++) {
      console.log(players[i]);
    }
    console.log(`${players.length} goals were scored`);
  },
};

// Task 1
for (const [index, player] of game.scored.entries())
  console.log(`Goal ${index + 1}: ${player}`);

// Task 2
let sumOdd = 0;
const oddValues = Object.values(game.odds);
for (const odd of oddValues) sumOdd += odd;
console.log(`Average odd: ${sumOdd / oddValues.length}`);

// Task 3
const oddEntries = Object.entries(game.odds);
for (const [name, value] of oddEntries) {
  const teamStr = name === "x" ? "draw" : `victory ${game[name]}`;
  console.log(`Odd of ${teamStr}: ${value}`);
}

// Task 4
const scores = {};
for (player of game.scored) {
  scores[player] ? (scores[player] += 1) : (scores[player] = 1);
}
console.log(scores);
