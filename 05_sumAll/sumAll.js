const sumAll = function(a, b) {
  if (a < 0 ||b < 0) return "ERROR";
  if (typeof(a) !== "number" || typeof(b) !== "number") return "ERROR";
  if (a <= b) {
    return sum(a, b)
  } else {
    return sum(b, a)
  }

};

function sum(x, y) {
  let sum = 0;
  for (let i = 0; x + i <= y; i++) {
    sum = sum + x + i
  }
  return sum;
}

// Do not edit below this line
module.exports = sumAll;
