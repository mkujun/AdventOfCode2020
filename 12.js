const fs = require('fs');
let input = fs.readFileSync('input12.txt', 'utf8').split('\n').slice(0, -1);
const splitAt = index => x => [x.slice(0, index), x.slice(index)]

let compas = {
  "east": 0,
  "west": 0,
  "north": 0,
  "south": 0,
  "position": "east",
  "degrees" : 90
}

let rotateCompas = (currentDegree, direction, num, compas) => {
  let result = 0;
  if (direction == "R") {
    currentDegree = currentDegree + num;

    if (currentDegree > 360) {
      result = currentDegree - 360;
    }
    else {
      result = currentDegree;
    }
  }
  else if (direction == "L") {
    currentDegree = currentDegree - num;
    if (currentDegree < 0) {
      result = 360 - Math.abs(currentDegree);
    }

    else {
      result = currentDegree;
    }
  }

  if (result == 90) {
    compas.position = "east";
    compas.degrees = 90;
  }
  else if (result == 180) {
    compas.position = "south";
    compas.degrees = 180;
  }
  else if (result == 270) {
    compas.position = "west";
    compas.degrees = 270;
  }
  else if (result == 360 || result == 0) {
    compas.position = "north";
    compas.degrees = 360;
  }
}

input.forEach(e => {
  let row = splitAt(1)(e);

  let direction = row[0];
  let value = row[1];

  if (direction == "F") {
    compas[compas.position] = (compas[compas.position] + parseInt(value));
  }
  else if (direction == "N") {
    compas["north"] = (compas["north"] + parseInt(value));
  }
  else if (direction == "S") {
    compas["south"] = (compas["south"] + parseInt(value));
  }
  else if (direction == "E") {
    compas["east"] = (compas["east"] + parseInt(value));
  }
  else if (direction == "W") {
    compas["west"] = (compas["west"] + parseInt(value));
  }
  else if (direction == "R") {
    rotateCompas(compas.degrees, "R", parseInt(value), compas);
  }
  else if (direction == "L") {
    rotateCompas(compas.degrees, "L", parseInt(value), compas);
  }
})

console.log("result", Math.abs(compas.west - compas.east) + Math.abs(compas.south - compas.north));
