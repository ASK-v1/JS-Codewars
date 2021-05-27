function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return 0;    
    }
    return 1;
}
function Primes (){
    this.first = (n) => {
    let prime = [];
    let count = 0;
        for(let i = 2; count < n; i++){
            if(isPrime(i)){
                prime.push(i);
                count++;
        }
    }
    return prime;
  } 
}
var Primes = new Primes();