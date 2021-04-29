function alphabetPosition(text) {

    const t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    text = text.split('').map(function(x){     
      return t.indexOf(x.toUpperCase()) + 1;
    });

    const result = text.filter(y =>{
    return y !== 0;
    });
    return result.join(' ');
}
