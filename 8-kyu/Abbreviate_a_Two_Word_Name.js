function abbrevName(name){
    name = name.toUpperCase();
    const n = name.split(' ');
    const n1 = n[0];
    const n2 = n[1];
    return `${n1[0]}.${n2[0]}`
}
