function zeros (n) {
  
    let result = 0;
    while (n >= 5){
        n /= 5;
        result += Math.floor(n);
    } 
    return result;
}
