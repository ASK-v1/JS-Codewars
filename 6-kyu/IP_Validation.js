function isValidIP(str) {
  let s = str.split('.');
  let filter = s.filter( (elem) => {
  if((elem > 255) || (elem < 0)) return false;
  if(isNaN(elem) || s.length !== 4) return false;
  if(elem.length !== parseInt(elem).toString().length) return false;
  else return true;
  });
  return (filter.length === 4) ?  true : false ;
}
