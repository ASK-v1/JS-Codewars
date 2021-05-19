function solution(roman){
    let I=1,V=5,X=10,L=50,C=100,D=500,M=1000;
    if(roman === 'IV') return 4;
    let sum = 0;
    let r = roman.split('');
    for (let i = 0; i < r.length; i++) {
        if(r[i] === 'M') sum += M;
            if(r[i] === 'D') sum += D;
            if(r[i] === 'C') sum += C;
            if(r[i] === 'L') sum += L;
            if(r[i] === 'X') sum += X;
            if(r[i] === 'V') sum += V;
            if(r[i] === 'I') sum += I;
    }
    return sum;
}