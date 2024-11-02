'use strict';

const range = (startNum, endNum) => {
    let array = [];
    for (let i = startNum; i <= endNum; i++) {
        array.push(i);
    }
    console.log(array);
}

range(15, 30);