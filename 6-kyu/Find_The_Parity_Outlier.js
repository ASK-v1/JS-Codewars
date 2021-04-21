function findOutlier(integers){

  const even = integers.filter(a => a % 2 === 0);
  const odd  = integers.filter(a  => a % 2 !== 0);
  const result = even.length === 1 ? even.shift() : odd.shift();

  return result;
}
