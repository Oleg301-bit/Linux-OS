'use strict';
let gainFigure = Number(prompt("Please enter figure from 0 to 7"));

  switch (gainFigure) {
    case 0:
      console.log(`You put ${gainFigure} . Binary number:000. Access mode:---`);
      break;
    case 1:
      console.log(`You put ${gainFigure} . Binary number:001. Access mode:--x`);
      break;
    case 2:
      console.log(`You put ${gainFigure} . Binary number:010. Access mode:-w-`);
      break;
    case 3:
      console.log(`You put ${gainFigure} . Binary number:011. Access mode:-wx`);
      break;
    case 4:
      console.log(`You put ${gainFigure} . Binary number:100. Access mode:r--`);
      break;
    case 5:
      console.log(`You put ${gainFigure} . Binary number:101. Access mode:r-x`);
      break;
    case 6:
      console.log(`You put ${gainFigure} . Binary number:110. Access mode:rw-`);
      break;
    case 7:
      console.log(`You put ${gainFigure} . Binary number:111. Access mode:rwx`);
      break;
    default:
      console.log("This is wrong number");
  }


