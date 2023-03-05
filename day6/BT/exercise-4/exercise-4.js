/** @format */

function leapYears(year) {
  // Coding here
  let year1 = year % 4;
  let year2 = year % 100;
  let year3 = year % 400;
  console.log(`${year1} ${year2} ${year3}`);
  if ((year1 === 0 && year2 !== 0) || (year2 === 0 && year3 === 0)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

leapYears(2000); // is a leap year: returns true
leapYears(1985); // is not a leap year: returns false
leapYears(1800);
leapYears(1900);
leapYears(1600);
leapYears(1984);
leapYears(2004);
