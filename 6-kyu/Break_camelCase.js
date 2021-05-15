function solution(string) {
    let s = string.split('');
    let arr = [];    
    let temp = 0;
    let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < alphabet.length; j++) { 
            if(s[i] === alphabet[j]){
                arr.push(string.slice(temp,i));
                temp = i;
            }
        }
    }   
    arr.push(string.slice(temp,s.length));
    return arr.join(' ');
    }