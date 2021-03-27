function fakeBin(x){

    let a = [];
    
    for (let i = 0; i<x.length; i++) {

      if (x[i] >= 5) a[i] = 1; 
      else if (x[i] >= 0) a[i] = 0;   
    }
    
    var x = a.toString().replace(/[^0-9\.]+/g, "");;
    return x;

}  


