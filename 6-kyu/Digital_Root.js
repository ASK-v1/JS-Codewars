function digital_root(n) {

    let sum = 0;
    const y = n.toString().split('').map(Number);
    
    for (let i = 0; i<y.length; i++) {
        sum += y[i];  
    }
        
    return sum > 9 ? digital_root(sum) : sum;
    
}
