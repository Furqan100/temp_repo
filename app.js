const load = require('lodash')
const item = [1,[2,[3,[4]]]]
const newItems =load.flattenDeep(item)
console.log(newItems);