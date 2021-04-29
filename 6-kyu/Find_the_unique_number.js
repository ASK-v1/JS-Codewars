function findUniq(arr) {
    const a = arr.sort();
    if( a[0] === a[1] ) return a[arr.length -1];
    else return a[0]; 
  
}
