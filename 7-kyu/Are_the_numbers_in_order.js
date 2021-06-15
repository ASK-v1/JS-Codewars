function inAscOrder(arr) {
    let l = arr.length;
    let sum = 0;
        for (let i = 0; i < l-1; i++) {       
            if(arr[i] < arr[i+1]) ++sum;
        }
        if(sum+1 === l) return true;
        return false;
    
    }