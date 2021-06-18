function calculate(num1, operation, num2) {
    if( (operation !== '+') &&  (operation !== '-') &&  (operation !== '*') && (num2 === 0) ) return null;
    switch(operation) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
    }
}
