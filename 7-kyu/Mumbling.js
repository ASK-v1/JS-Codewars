function accum(s) {

let result = [];

    for (let i = 0; i < s.length; i++) {
        
        result.push(s[i].toUpperCase());
        result.push(s[i].toLowerCase().repeat(i));
        result.push('-');
     
    }
    result.pop();
    return `${result.join('')}`;

}
