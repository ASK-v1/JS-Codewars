function whatCentury(year) {
    let century = Math.ceil(year/100);
    if(century > 3 && century < 21) return `${century}th`;
    else if(century % 10 === 1) return `${century}st`;
    else if(century % 10 === 2) return `${century}nd`;
    else if(century % 10 === 3) return `${century}rd`;
    else return `${century}th`;
}
    