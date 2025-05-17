/**
 * Возвращает x в степени n (n - целое число).
 * @param {number} x
 * @param {number} n 
 * @returns {number}
 */
function pow(x, n) {
    if (n === 0) return 1;
    if (n < 0) return 1 / pow(x, -n);
    
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

/**
 * Вычисляет сумму чисел от 1 до n включительно.
 * @param {number} n
 * @returns {number}
 */
function sumTo(n) {
    return n * (n + 1) / 2;
}

/**
 * Проверяет год на високосность.
 * @param {number} year
 * @returns {boolean}
 */
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
}

/**
 * Возвращает факториал числа n (n!).
 * @param {number} n
 * @returns {bigint}
 */
function factorial(n) {
    if (n === 0) return 1n;
    return BigInt(n) * factorial(n - 1);
}

/**
 * Возвращает n-е число Фибоначчи.
 * @param {number} n
 * @returns {bigint}
 */
function fib(n) {
    let a = 0n;
    let b = 1n;
    if (n === 0) return a;
    
    for (let i = 2; i <= n; i++) {
        const c = a + b;
        a = b;
        b = c;
    }
    return b;
}

/**
 * Возвращает функцию, которая сравнивает свой аргумент с x.
 * @param {number} x
 * @returns {function}
 */
function compare(x) {
    return function(y) {
        if (y > x) return true;
        if (y < x) return false;
        return null;
    };
}

/**
 * Возвращает сумму всех переданных аргументов.
 * @param {...number} args
 * @returns {number}
 */
function sum(...args) {
    return args.reduce((total, current) => total + current, 0);
}

/**
 * Добавляет символьное свойство blackSpot со значением true к переданному объекту.
 * @param {Object} obj
 * @returns {Object}
 */
function addBlackSpot(obj) {
    obj[Symbol.for("blackSpot")] = true;
    return obj;
}