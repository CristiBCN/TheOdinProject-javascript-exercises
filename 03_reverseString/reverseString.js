const reverseString = function(string) {
  let arr = string.split("");
  let n = arr.length;
  let invArr = [];
  for (let i = 0; i <= n; i++) {  
    invArr.push(arr[n - i]);     
  }
  return invArr.join("")
};

// Do not edit below this line
module.exports = reverseString;
