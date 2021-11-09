let operations = {
    sum: (x, y) => x + y,
    sub: (x, y) => x - y,
    div: (x, y) => x / y,
    mul: (x, y) => x * y,
};

let calculator = (function (x, y) {
    let parameters = {
        param: {
            x: x,
            y: y,
        },
        operation: null,
        set: setOperation,
        math: math,
    };
    function setOperation (oper) {
        this.operation = oper;
    }

    function math () {
        return this.operation(this.param.x, this.param.y);
    }
    return parameters;
})(2, 2);

calculator.set(operations.div);
console.log(calculator.math());