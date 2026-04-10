function reserveString(str){
  return str.split("").reverse().join("")
}
console.log(reserveString("abhishek"));

const str="My name is Abhishek Pandey"
const withouSpace=str.split("")//withourt space
const withSpace=str.split(" ")
const noSpace=str.split()
//console.log(newWords);
console.log(withouSpace[4]);
console.log(withSpace[3]);
console.log(noSpace);


// const emptyString = "";

// // string is empty and separator is non-empty
// console.log(emptyString.split("a"));
// // [""]

// // string and separator are both empty strings
// console.log(emptyString.split(emptyString));
// []
function splitString(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator);

  console.log("The original string is:", stringToSplit);
  console.log("The separator is:", separator);
  console.log(
    "The array has",
    arrayOfStrings.length,
    "elements:",
    arrayOfStrings.join(" / "),
  );
}
const tempestString = "Oh brave new world that has such people in it.";
const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const space = " ";
const comma = ",";

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);
