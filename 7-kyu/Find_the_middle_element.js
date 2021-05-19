var gimme = function (inputArray) {
  
    const input = inputArray.slice().sort((a,b) => a-b);
    return inputArray.indexOf(input[1]);
};
