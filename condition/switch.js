const date = new Date().getDay();
console.log(date);
let day;

switch (date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);

const day2 = new Date().getDay();
console.log(day2);

switch (day2) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("Working Day");
    break;
  default:
    console.log("Break Day");
}
