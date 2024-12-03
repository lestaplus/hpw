'use strict';

const compose = (...fns) => {
    const handlers = [];

    const composed = (x) => {
        if (fns.length === 0) return x;

        const last = fns.length - 1;
        let res = x;
        try {
            for (let i = last; i >= 0; i--) {
                res = fns[i](res);
            }
            return res;
        } catch (error) {
            for (const handler of handlers) {
                handler(error);
            }
            return undefined;
        }
    }
    composed.on = (name, handler) => {
        if (name === 'error') handlers.push(handler);
    }
    return composed;
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = compose(inc, twice, cube);
f.on('error', e => console.error('Error:', e.message));
const x = f(5);
console.log(x);