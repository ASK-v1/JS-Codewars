function sumDigits(number) {
    let abs = Math.abs(number);
    let l = abs.toString().length;
    let sum = 0;
        for (let i = 0; i < l; i++) {
            sum += parseInt(abs.toString()[i]);
        }
        return sum;
    }
    