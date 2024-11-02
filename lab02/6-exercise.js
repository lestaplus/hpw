'use strict';

const average = (a, b) => (a + b) / 2;

const square = (x) => x ** 2;

const cube = (x) => x ** 3;

const calculate = () => {
    let array = [];
    for (let i = 0; i <= 9; i++) {
        array.push(average(square(i), cube(i)));
    }
    console.log(array);
}

calculate();