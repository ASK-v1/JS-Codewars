function order(words){ 
   let w = words.split(' ');
   let l = w.length;
   let result = [];

   for (let j=0; j<=l; j++) { 
      for (let i=0; i<l; i++) { 
         if(w[i].indexOf(j) >= 0){          
            result.push(w[i]);
         }
      }
   } 
   return result.join(' ');   
}

