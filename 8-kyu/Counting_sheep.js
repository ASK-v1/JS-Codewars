function countSheeps(arrayOfSheep) {
  let sum = 0;
  arrayOfSheep.forEach( a => {
    if(a === true) sum++;
  });
  return sum;
}