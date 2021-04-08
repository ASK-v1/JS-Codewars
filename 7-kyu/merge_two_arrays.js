function mergeArrays(a, b) {
  
  let result = [] , l = a.length;
  
	for (let i = 0; i < l; i++) {
		result.push( a.shift() ); 
		if ( b.length > 0 ) result.push( b.shift() );       
	}
      if ( b.length > 0 ) result = result.concat(b);
        
  return result;
}