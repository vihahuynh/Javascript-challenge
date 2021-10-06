const calcAverageHumanAge = (ages) => {
  const humanAges = ages.map((age) => (age <= 2 ? age * 2 : age * 4 + 16));
  const adults = humanAges.filter((age) => age >= 18);
  // return adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return adults.reduce((acc, age, _, arr) => acc + age / arr.length, 0);
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
