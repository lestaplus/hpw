'use strict';

const array = [true, 'hello', 5, 12, -200, false, false, 'word', 7, true, -10, 'data', false, 'type', 0];

let hash = {};

for (const element of array) {
    const type = typeof element;
    if (!hash[type]) {
        hash[type] = 0;
    }
    hash[type] += 1;
}

console.dir(hash);