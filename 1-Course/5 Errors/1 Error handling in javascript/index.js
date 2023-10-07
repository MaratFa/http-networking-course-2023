/*
printCharacterStats(4);
printCharacterStats("ten");
printCharacterStats(10);

function printCharacterStats(level) {
  try {
    if (isNaN(level)) {
      throw new Error("Parameter is not a number!");
    }
    console.log(`Your character is level ${level}!`);
  } catch (error) {
    console.log(error.message);
  }
}
*/

try {
  printCharacterStats(4);
  printCharacterStats(10);
  printCharacterStats("ten");
} catch (error) {
  console.log(error.message);
}

function printCharacterStats(level) {
  if (isNaN(level)) {
    throw new Error("Parameter is not a number!");
  }
  console.log(`Your character is level ${level}!`);
}
