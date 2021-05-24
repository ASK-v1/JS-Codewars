function dataReverse(data) {

    let l = data.length;
    let result = [];
    while(l){
    result.push(...data.slice(l-8,l));
    l -= 8;
    }
    return result;  
  }