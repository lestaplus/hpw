'use strict';

const user = {
    'Yaroslav': '+380445554433',
    'Anatolii': '+380985723951',
    'Dmytro': '+380975352183'
}

const findPhoneByName = (name) => {
    console.log(user[name]);
}

findPhoneByName('Yaroslav');