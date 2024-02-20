const repeatString = function(string, num) {
  let text = "";
  if (num < 0) {
    text = "ERROR";
  } else if (num === 0) {
    text = "";
  } else {
    for (let i = 0; i < num; i++) {
    text = text.concat(string);    
    }
  }
  return text;
};

// Do not edit below this line
module.exports = repeatString;
