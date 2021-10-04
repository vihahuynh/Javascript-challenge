const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const flightsArr = flights.split("+");
console.log(flightsArr);

for (const flight of flightsArr) {
  let [type, fromLocation, toLocation, time] = flight.split(";");
  fromLocation = fromLocation.slice(0, 3).toUpperCase();
  toLocation = toLocation.slice(0, 3).toUpperCase();
  type = type.replace("_", "").replace("_", " ");
  if (type.startsWith("Delayed")) type = `🔴 ${type}`;
  time = time.replace(":", "h");
  const output =
    `${type} from ${fromLocation} to ${toLocation} (${time})`.padStart(45);
  console.log(output);
}
