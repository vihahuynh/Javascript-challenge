"use strict";
const { default: axios } = require("axios");

const whereAmI = function (lat, lng) {
  const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;
  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      console.log(`You are in ${data.city}, ${data.country}`);
      return data.country;
    })
    .then((country) => {
      axios
        .get(`https://restcountries.com/v3.1/name/${country}`)
        .then((response) => console.log(response.data));
    })
    .catch((err) => console.log(err.message));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
