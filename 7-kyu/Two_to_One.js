function longest(s1, s2) {
    
    const s = s1.concat(s2);
    let set = new Set(s)
    const result = [...set].sort();

    return result.join('');  
}
