function isPrime(number) {
    if(number < 2) return false;
    for(let i = 2; i < number; i++){
    if(number % i === 0) return false;    
    }
    return true;
}
function getPrimes(start, finish) {
var primes = [];
    for(var i = Math.min(start, finish) || 2; i <= Math.max(start, finish); i++) {
        if (isPrime(i)) primes.push(i); 
    }
    return primes;
}