function nextPrime(n){
    if (n < 2) return 2;
    if (n % 2 === 0) --n;

    const isPrime = (n) => {
        for(let i = 2; i <= Math.sqrt(n); i++){
            if (n % i === 0) return 0;
        }   
        return 1;
    }
    while(n = n + 2){
        if (isPrime(n)) return n;
    } 
}