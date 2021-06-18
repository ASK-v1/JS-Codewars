function isNarcissistic(n){ 
    let a = n.toString().split('');
    let sum = 0;
      for (let i = 0; i < a.length; i++) {
        sum += a[i]**a.length;  
      }
    return sum === n;
    }
    