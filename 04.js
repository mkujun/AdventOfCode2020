const fs = require('fs');

let input = fs.readFileSync('input04.txt', 'utf8').split('\n');
let passport = '';
let counter = 0;

validPassport = (row) => {
  if (
    row.includes("byr") 
    && row.includes("hgt")
    && row.includes("iyr")
    && row.includes("eyr")
    && row.includes("hcl")
    && row.includes("ecl")
    && row.includes("pid")
  ){
    counter++;
  }
}

input.forEach(row => {
  if (row === "") {
    validPassport(passport);

    passport = '';
  }
  else {
    passport = passport + row;
  }
  
})

console.log("counter: ", counter);
