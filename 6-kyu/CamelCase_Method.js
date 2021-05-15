String.prototype.camelCase = function () {
    let arr = [];
    let s = this.split(' ');

    for (let i = 0; i < s.length; i++) {    
        let current = s[i];
        let temp = current.toLowerCase();
        temp = temp.substr(0,1).toUpperCase() + temp.substr(1);
        arr.push(temp);
    }
    return arr.join('');
};
