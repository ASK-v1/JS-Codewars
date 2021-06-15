function sumEvenNumbers(input) {
    return input.filter( a => a % 2 === 0 ).reduce((a,b) => a+b);
}
    