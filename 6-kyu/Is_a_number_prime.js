function isPrime(num) {
    let flag = 0;
    if(num === 1) return false;
        for (let i = 1; i <= Math.sqrt(num); i++) {       
            if(num % i === 0){
            ++flag;
            if(flag === 3) break;
            }
        }
        if(flag === 1) return true; 
        else return false;
    }