'use strict';

const array = [
    { name: 'Yaroslav', phone: '+380445554433' },
    { name: 'Anatolii', phone: '+380985723951' },
    { name: 'Dmytro', phone: '+380975352183' }
]

const findPhoneByName = (name) => {
    for (const user of array) {
        if (user.name === name) {
            console.log(user.phone);
        }
    }
}

findPhoneByName('Dmytro');