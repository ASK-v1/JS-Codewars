function sortArray(array) {
    const a = array.filter( x => x % 2).sort( (a,b) => a-b );
    const b = array.map( x => x % 2 ? a.shift() : x);
    
    return b;
}