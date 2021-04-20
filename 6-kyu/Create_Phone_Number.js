function createPhoneNumber(numbers){
let a = `(${numbers[0]}${numbers[1]}${numbers[2]}) `;
let b = [];  
let c = []; 

  for (let i = 3; i < 10; i++) {     
    (i < 6) ? b.push(numbers[i]) : c.push(numbers[i]);
  }
  return a + b.join('') + '-' + c.join('');  
}

