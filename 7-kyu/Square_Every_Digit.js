function squareDigits(num){
    let n = num.toString().split('');
    let result = [];
  
    for (let i = 0; i < n.length; i++) {
      result.push(Math.pow(n[i],2));
  }
  return parseInt(result.join(''));
  }
  