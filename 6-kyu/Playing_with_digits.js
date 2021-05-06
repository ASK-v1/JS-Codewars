function digPow(n, p){
    let sum = 0
    let a = n.toString();
     
    for (let i = 0; i < a.length; i++) {
        sum += Math.pow(a[i],p+i);
    }
    if(sum % n === 0)return sum/n;
    else return -1;
}
 