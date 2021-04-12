function highAndLow(numbers){

    const x = numbers.split(' ').sort(function(a, b){return b - a});  
    const low = x.length;
    
    return `${x[0]} ${x[low-1]}`;
    
}
    
    