const removeFromArray = function(arr,...args) {
  function filterByArg(item) {
    for (let arg of args) {
      if (item === arg) {
        return false 
      }             
    }
    return true;
  }

  return arr.filter(filterByArg)

//  return arr.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
