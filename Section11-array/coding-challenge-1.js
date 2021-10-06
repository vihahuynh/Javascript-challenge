const checkDogs = (julia, kate) => {
  // Task 1
  const juliaCopy = julia.slice(1, -2);

  // Task 2
  const all = juliaCopy.concat(kate);

  // Task 4
  all.forEach((age, i) => {
    console.log(
      `Dog number ${i + 1} is ${
        age < 3 ? "still a puppy" : "an adult"
      }, and is ${age} year(s) old 🐶`
    );
  });
};

// Task 5
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
