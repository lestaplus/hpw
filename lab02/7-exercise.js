'use strict';

const fn = () => {
    const object1 = {
        name: 'Anatolii'
    }

    let object2 = {
        name: 'Anatolii'
    }

    object1.name = 'test1';
    object2.name = 'test2';

    console.log(object1);
    console.log(object2);

    // object1 = { name: 'Tolik' }; видає помилку, бо константа
    object2 = { name: 'Tolik' };

    console.log(object1);
    console.log(object2);
}

fn();