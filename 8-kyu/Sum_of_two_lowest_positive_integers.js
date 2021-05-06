function sumTwoSmallestNumbers(numbers) {  
   
    const sum = numbers.sort( function (a,b) { return a-b });
    return sum[0]+sum[1];
}
