const fs = require('fs');

let input = fs.readFileSync('input05.txt', 'utf8').split('\n').slice(0,-1);
//let input = fs.readFileSync('testInput.txt', 'utf8').split('\n').slice(0,-1);
let high = 0;

input.forEach(row => {
  let rowsSplit = row.split('');
  let rows = [...Array(128).keys()];
  let columns = [...Array(8).keys()];

  rowsSplit.forEach(letter => {
    if (letter == 'F') {
      rows = rows.slice(0, rows.length/2);
    }
    else if (letter == 'B') {
      rows = rows.slice(rows.length/2, rows.length);
    }
    else if (letter == 'R') {
      columns = columns.slice(columns.length/2, columns.length);
    }
    else if (letter == 'L') {
      columns = columns.slice(0, columns.length/2);
    }
  })

  //high = rows[0] * 8 + columns[0];
  if (rows[0] * 8 + columns[0] > high) {
    high = rows[0] * 8 + columns[0];
  }
})

console.log("high", high);


