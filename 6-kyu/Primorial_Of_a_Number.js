function numPrimorial(n){
    let num = 50;
    let prime = [2];
    let sum = 1;
    
        for (let j = 3; j < num; j++) {    
        let flag = 0;
            for (let i = 1; i <= j; i++) {       
                if( j % i === 0  ) ++flag;       
            }
            if(flag === 2) prime.push(j);
        }
        for (let k = 0;  k < n; k++) {
        sum *= prime[k];  
        }
        return sum;
}
    