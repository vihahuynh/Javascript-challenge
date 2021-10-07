const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// Task 1
dogs.forEach(
  (dog) => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);

// Task 2
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
const checkPortion = (dog) => {
  if (dog.curFood > dog.recommendedFood * 1.1) {
    return 1;
  } else if (dog.curFood < dog.recommendedFood * 0.9) {
    return -1;
  } else {
    return 0;
  }
};
console.log(checkPortion(dogSarah));

// Task 3
const ownersEatTooMuch = dogs
  .filter((dog) => checkPortion(dog) === 1)
  .flatMap((dogEatTooMuch) => dogEatTooMuch.owners);

const ownersEatTooLittle = dogs
  .filter((dog) => checkPortion(dog) === -1)
  .flatMap((dogEatTooMuch) => dogEatTooMuch.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// Task 4
const warning = (onwers, type) => {
  console.log(`${onwers.join(" and ")}\'s dogs eat too ${type}!`);
};

warning(ownersEatTooMuch);
warning(ownersEatTooLittle);

// Task 5
console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

// Task 6
console.log(dogs.some((dog) => checkPortion(dog) === 0));

// Task 7
console.log(dogs.filter((dog) => checkPortion(dog) === 0));

// Task 8
const sortedDogs = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortedDogs);
