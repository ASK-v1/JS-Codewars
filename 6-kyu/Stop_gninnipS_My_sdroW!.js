function spinWords(string){
    const s = string.split(' ');
    const result = [];

  s.forEach(element => {
  (element.length > 4) ? result.push(element.split('').reverse().join('')) : result.push(element);
  });
    return result.join(' ');
}
