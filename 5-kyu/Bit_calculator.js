function calculate(num1,num2){
    let bit1 = 0;
    let bit2 = 0;
    let l1 = num1.split('').length;
    let l2 = num2.split('').length;
    
    for (let i = 0; i < l1; i++) {
        bit1 *= 2;
        bit1 += +num1[i];
    }
    for (let i = 0; i < l2; i++) {
        bit2 *= 2;
        bit2 += +num2[i];
    }
    return bit1+bit2;
}
    
    