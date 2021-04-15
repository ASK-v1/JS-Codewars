function positiveSum(arr) {
    let sum = 0;
  
     arr.forEach(elem =>{
       if(elem > 0) sum += elem;   
    });   
       return sum;
   }
  