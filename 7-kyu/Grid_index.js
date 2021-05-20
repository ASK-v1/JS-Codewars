function gridIndex(grid, indices) {

let all = [];
let g = grid.join(',').split(',');

for (let i = 0; i < indices.length; i++) {   
    all.push(g[indices[i]-1]);
}
return all.join('');
}
