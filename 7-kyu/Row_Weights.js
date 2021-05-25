function rowWeights(array){
    let row = [];
    let low = 0;
    let high = 0;
    
        for (let i = 0; i < array.length; i++) {
            if(i % 2 === 0) low += array[i];
            else high += array[i];
        } 
        row.push(low);
        row.push(high);
        return row;
}
    