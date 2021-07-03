/**
 * We have two functions, `sum` and `subtract` ,
 * that are ready to be tested.
 *
 * Task: check if the results are the respects.
 *
 *            **BONUS**
 * Throw an error if the test fails.
 *
 *
 * Execute: Use `node lessons/simple.js` to run the test.
 */

const {sum, subtract} = require('../math')

let result, expected

result = sum(5,10)
expected = 15

if (result != expected){
    throw new Error(`${result} isn't equal to ${expected}`)
}

result = subtract(5,10)
expected = -5

if (result != expected){
    throw new Error(`${result} isn't equal to ${expected}`)
}

/**
 * Hint: there's no magic, just the most straightforward conditional statement.
 *
 * Answer: Checkout the main branch for the answer.
 */
