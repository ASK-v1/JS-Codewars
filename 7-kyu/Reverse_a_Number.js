function reverseNumber(n) {

  const x = parseInt( n.toString().split('').reverse().join('') ) * Math.sign(n);
    
  return x;
}

