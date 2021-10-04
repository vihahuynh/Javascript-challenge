const input =
  "underscore_case\n first_name\nSome_Variable\n calculate_AGE\ndelayed_departure\n    Nemo_HUYNH";

const normalizeStr = (i, str) => {
  let [first, last] = str.toLowerCase().trim().split("_");
  let newStr = `${first}${last.replace(last[0], last[0].toUpperCase())}`;
  const output = newStr.padEnd(20, " ") + "✅".repeat(i + 1);
  console.log(output);
};

const inputArr = input.split("\n");
for (const [i, str] of inputArr.entries()) {
  normalizeStr(i, str);
}
