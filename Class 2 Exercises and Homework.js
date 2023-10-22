// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
const me = {
  firstName: "Dave",
  lastName: "Shevitz",
  "favorite food": "teriyaki",
  bestFriend: {
    firstName: "Jen",
    lastName: "Shevitz",
    "favorite food": "falafel"
  }
}

// 2. console.log best friend's firstName and your favorite food

console.log("Best friend's name:", me.bestFriend.firstName);
console.log("My favorite food:", me["favorite food"]);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

let row1 = ["-", "O", "-"];
let row2 = ["-", "X", "O"];
let row3 = ["X", "-", "X"];

let board = [row1, row2, row3];

// 4. After the array is created, 'O' claims the top right square.
// Update that value.

board[0][2] = "O";

// 5. Log the grid to the console.

console.log("Board:", board);


// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
function checkEmail(myEmail){
  const regex = new RegExp(/^\S+@\S+\.\S+$/);
  return regex.test(myEmail);
}

let myEmail = "foo@bar.baz" // should return true;
console.log (myEmail, checkEmail(myEmail));

myEmail = "bezos@amazon.co.uk" //should return true;
console.log (myEmail, checkEmail(myEmail));

myEmail = "invalid-email" //should return false;
console.log (myEmail, checkEmail(myEmail));

myEmail = "dave@shevitz@com" //should be false;
console.log (myEmail, checkEmail(myEmail));

myEmail = "@invisible.man" //should be false;
console.log (myEmail, checkEmail(myEmail));

myEmail = "123@me.com" //should be true;
console.log (myEmail, checkEmail(myEmail));


// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';

function dateConvert(originalDate){
  let [month, day, year] = originalDate.split("/");
  monthIndex = month - 1;
  return new Date(year, monthIndex, day);
}

const convertedAssignmentDate = dateConvert(assignmentDate);

console.log("Converted assignment date:", convertedAssignmentDate);


// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
function getDueDate(startDate){
  return new Date(startDate.setDate(startDate.getDate() + 7));
}

assignmentDueDate = getDueDate(convertedAssignmentDate);
console.log("Due date:", assignmentDueDate);


// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function createTimeElement(myDate){
  const options = {
    timezone: "UTC", // not sure if I need this, but it's in the MDN docs
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = myDate.toLocaleString('en-US', options)
  const isoDate = myDate.toISOString().split('T')[0];
  return `<time datetime="${isoDate}">${formattedDate}</time>`
}


// 10. log this value using console.log

console.log(createTimeElement(assignmentDueDate));
