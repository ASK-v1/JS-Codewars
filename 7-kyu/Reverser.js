function reverse(n){
let a = 0;
    while(n){
        a = (a*10) + (n%10);
        n = Math.floor(n/10);
    }
return a;
}
    