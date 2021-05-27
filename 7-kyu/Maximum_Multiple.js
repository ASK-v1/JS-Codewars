function maxMultiple(divisor, bound){
    let i = bound;
        for (; bound > 0; --i) {      
            if(i % divisor === 0) return i;
        } 
    }
    