function stray(numbers) {
    
const n = numbers.sort();

if(n[0] === n[1]) return n[n.length - 1];
return n[0];

}
