function solve(s){
    let l , u = 0;
    
        for (let i = 0; i < s.length; i++) {       
            if(s[i] === s[i].toUpperCase()) ++u; 
        }
        l = (s.length - u);
        
        if(u === l) return s.toLowerCase();
        else if(u > l) return s.toUpperCase();
        else if(l > u) return s.toLowerCase();
    }
    