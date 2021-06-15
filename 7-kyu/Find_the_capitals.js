var capitals = function (word) {
    let a = [];
    let w = word.split('');
        for(let i = 0; i < w.length; i++) {
            if(w[i] === w[i].toUpperCase()) {
            a.push(i);
            }
        }
    return a;
    };
