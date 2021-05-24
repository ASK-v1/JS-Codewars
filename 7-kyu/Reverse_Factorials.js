function reverseFactorial(num) {
    let a = 1; 
    let fact = 1;  
        while(fact<num){  
            ++a;     
            fact = fact * a;      
        }
       return fact === num ? `${a}!` : 'None'; 
}