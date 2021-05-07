function expandedForm(num) {
    let result = [];
    let a = num.toString();
    let n = num.toString().split('').length;
    let p;
    
for (let i = 0; i < num.toString().split('').length; i++) {  
   n--;
   p = Math.pow(10,n);

   if(a[i] > 0) result.push(a[i] * p);
       
} 
    return result.join(' + ');
}
