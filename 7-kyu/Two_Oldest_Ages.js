function twoOldestAges(ages){

    let two =  ages.sort((a,b) => b-a);
    let t = [two[1],two[0]];
    return t;
}
