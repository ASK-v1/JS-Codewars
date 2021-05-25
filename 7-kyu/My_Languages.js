function myLanguages(results) {
    let lang = [];

    let Array = Object.entries(results).sort(([a1, b1], [a2, b2]) => b2 - b1);
    let arr = Array.filter(([key, value]) => value >= 60);
    for (let i = 0; i < arr.length; i++) {
        lang.push(arr[i][0]);     
    }
    return lang;
}
