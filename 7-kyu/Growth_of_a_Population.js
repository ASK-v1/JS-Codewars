function nbYear(p0, percent, aug, p) {
    let i = 0;
    while (p > p0) {
      p0 += p0 * (percent/100) + aug;
      ++i;
    }
    return i;
}
