const fs = require('fs');
let input = fs.readFileSync('input08.txt', 'utf8').split('\n').slice(0, -1);

let accumulator = 0;
let nextJump = 0;

let element;
let split;
let command;
let value;
let run = true;

let visited = new Array(input.length).fill(false);

do {
  element = input[nextJump];
  split = element.split(" ");
  command = split[0];
  value = split[1];

  if (command == "nop") {
    if (visited[nextJump]) {
      run = false;
    }
    else {
      visited[nextJump] = true;
      nextJump++;
    }
  }
  else if (command == "acc") {
    if (visited[nextJump]) {
      run = false;
    }
    else {
      visited[nextJump] = 1;
      nextJump++;
      accumulator = accumulator + parseInt(value);
    }
  }
  else if (command == "jmp") {
    if (visited[nextJump]) {
      run = false;
    }
    else {
      console.log("jmp indexOf", input.indexOf(input[nextJump]));
      visited[nextJump] = 1;
      nextJump = nextJump + parseInt(value);
    }
  }
} while (run);

console.log("acc", accumulator);
