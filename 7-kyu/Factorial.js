function factorial(n) {
    let sum = 1;
    if (n < 0 || n > 12) throw new RangeError()
    for (let i = 1; i <= n; i++) {sum *= i; }   
    return sum;
}
