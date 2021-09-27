"use strict";

const temperatures = [12, 5, -6, 0, 4];

const printForecast = (arr) => {
  let forcasts = "";
  for (let i = 0; i < arr.length; i++) {
    const forcast = `${arr[i]}°C in ${i + 1} day... `;
    forcasts = forcasts + forcast;
  }

  console.log(forcasts);
};

printForecast(temperatures);
