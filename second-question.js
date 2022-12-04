const dice = [];
dice[0] = "Best Consumer Solution.";
dice[1] = "Best Enterprise Solution.";
dice[2] = "Most Innovative Solution";
dice[3] = "Best Gaming Solution";
dice[4] = "Best Health Solution";
dice[5] = "Best Educational Solution";

var sides = dice[Math.floor(Math.random() * dice.length)];

console.log(sides);
