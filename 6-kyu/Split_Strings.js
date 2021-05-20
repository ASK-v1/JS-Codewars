function solution(str){

let arr= [];
for (let i = 0; i < str.split('').length; i+=2) {
    arr.push(str.slice(i,i+2));
}
if(str.split('').length % 2 === 0){
    return arr;
}
arr.pop();
arr.push(`${str[str.split('').length -1]}_`);
return arr;
}
