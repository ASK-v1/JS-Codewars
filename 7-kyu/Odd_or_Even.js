function oddOrEven(array) {
    if(!array[0] && !array[1]) return 'even';
    let sum = array.reduce( (a,b) => {return a+b });
    if(sum % 2 === 0) return 'even';
    else return 'odd';
  }
