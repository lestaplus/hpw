'use strict';

const range = (startNum, endNum) => {
    let array = [];
    for (let i = startNum; i <= endNum; i++) {
        if (i % 2 !== 0) {
            array.push(i);
        }
    }
    console.log(array);
}

range(15, 30);