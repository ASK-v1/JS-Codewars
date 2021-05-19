function DNAtoRNA(dna) {
  
    let a = dna.split('');
    for (let i = 0; i < a.length; i++) {  
        if(a[i] === 'T') a[i] = 'U';       
    }
    return a.join('');
}
