const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./src/sumOfOther');
const make = require('./src/make');
const recursion = require('./src/recursion');

describe('Sum of other', () => {
    it('1', () => {
        const actual = sumOfOther([2, 3, 1]);
        assert.deepEqual(actual, [4, 3, 5]);
    });
    it('2', () => {
        const actual = sumOfOther([6, -1, 8]);
        assert.deepEqual(actual, [7, 14, 5 ]);
    });
    it('3', () => {
        const actual = sumOfOther([0, 21, 2, 9]);
        assert.deepEqual(actual, [32, 11, 30, 23]);
    });
    it('4', () => {
        const actual = sumOfOther([]);
        assert.deepEqual(actual, []);
    });
    it('5', () => {
        const actual = sumOfOther(undefined);
        assert.deepEqual(actual, []);
    });
});

describe('Make', () => {
    it('1', () => {
        function sum(a, b) {
            return a + b;
        }
        const actual = make(15)(34, 21, 666)(41)(sum);
        assert.equal(777, actual);
    });
    it('2', () => {
        function sum(a, b) {
            return a + b;
        }
        function substr(a, b) {
            return a - b;
        }
        const actualSum = make(15)(34, 21, 666)(41)(sum);
        const actualSubst = make(20)(5)(3)(substr);
        assert.equal(12, actualSubst);
        assert.equal(777, actualSum);
        assert.equal(12, actualSubst);
    });
});


describe('Recursion', () => {
    it('1', () => {
        let tree =
            {
                "value": 100,
                "left": {
                    "value": 90,
                    "left": {
                        "value": 70,
                        "left": {
                            "value" : 50
                        }
                    },
                    "right": {
                        "value": 99
                    }
                },
                "right": {
                    "value": 120,
                    "left": {
                        "value": 110
                    },
                    "right": {
                        "value": 130,
                        "right": {
                            "value" : 140
                        }
                    }
                }
            };

        const actual = recursion(tree);
        assert.deepEqual([ [ 100 ], [ 90, 120 ], [ 70, 99, 110, 130 ], [ 50, 140 ] ]
            , actual);
    });

    it('2', () => {
        let tree =
            {
                "value": 15,
                "left": {
                    "value": 13,
                    "left": {
                        "value": 12,
                        "left": {
                            "value" : 11
                        }
                    },
                    "right": {
                        "value": 14
                    }
                },
                "right": {
                    "value": 50,
                    "right": {
                        "value": 55
                    }
                }
            };

        const actual = recursion(tree);
        assert.deepEqual([ [ 15 ], [ 13, 50 ], [ 12, 14, 55 ], [ 11 ] ]
            , actual);
    });
});
