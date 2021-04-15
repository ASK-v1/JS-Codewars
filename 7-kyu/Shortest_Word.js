function findShort(s){

    const x = s.split(' ').sort(function(a, b){return  a.length - b.length});;
    
    return x[0].length;
}
    