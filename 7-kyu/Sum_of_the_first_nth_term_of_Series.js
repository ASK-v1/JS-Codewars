function SeriesSum(n) {
    let sum = 1;
    if(n === 0) return '0.00';
    let a = 4;  
    for(let i = 0; i<n-1; i++){ 
      sum += (1/a);
      a += 3;
    }
    return sum.toFixed(2);
  }
