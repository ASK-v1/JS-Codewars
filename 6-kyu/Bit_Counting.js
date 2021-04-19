var countBits = function(n) {
    let sum = 0;

    const binary = n.toString(2).split('');

    for (const it of binary) {
        if(it > 0) ++sum;   
    }
    return sum;
};
