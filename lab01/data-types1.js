'use strict';

const array = [true, 'hello', 5, 12, -200, false, false, 'word', 7, true, -10, 'data', false, 'type', 0];

let hash = {
    number: 0,
    string: 0,
    boolean: 0
};

for (const element of array) {
    const type = typeof element;
    hash[type] += 1;
}

console.dir(hash);