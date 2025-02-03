"use strict";
let gainFigure = Number(prompt("Please enter figure from 0 to 7"));
if (
  gainFigure === 0 ||
  gainFigure === 1 ||
  gainFigure === 2 ||
  gainFigure === 3 ||
  gainFigure === 4 ||
  gainFigure === 5 ||
  gainFigure === 6 ||
  gainFigure === 7
) {
  let result = gainFigure;
  switch (result) {
    case 0:
      console.log("You put 0. Binary number:000. Access mode:---");
      break;
    case 1:
      console.log("You put 1. Binary number:001. Access mode:--x");
      break;
    case 2:
      console.log("You put 2. Binary number:010. Access mode:-w-");
      break;
    case 3:
      console.log("You put 3. Binary number:011. Access mode:-wx");
      break;
    case 4:
      console.log("You put 4. Binary number:100. Access mode:r--");
      break;
    case 5:
      console.log("You put 5. Binary number:101. Access mode:r-x");
      break;
    case 6:
      console.log("You put 6. Binary number:110. Access mode:rw-");
      break;
    case 7:
      console.log("You put 7. Binary number:111. Access mode:rwx");
      break;
    default:
      console.log("This is default meaning");
  }
} else {
  console.log("Wrong number");
}
