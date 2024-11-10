'use strict';

const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
};

const ages = (persons) => {
    let result = {};
    for (const person in persons) {
        let age = persons[person].died - persons[person].born;
        result[person] = age;
    }
    return result;
}

console.log(ages(persons));