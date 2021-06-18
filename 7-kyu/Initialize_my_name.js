function initializeNames(name){
    let n = [];
    let names = name.split(' ');
    
        if(names.length > 2) {
            for (let i = 1; i < names.length-1; i++) {          
                n.push(names[i][0] + '.')         
            }
        n.unshift(names[0]);
        n.push(names[names.length-1]);
        return n.join(' ');
        }
        return name;
    }
    