function getMiddle(s){
  
    if(s.length % 2 === 0){
      const l = (s.length / 2)-1;  
      return s.slice(l,l+2);
    }
    else {
      const l = (s.length / 2);
      return s.slice(l,l+1);
    }
  }
  