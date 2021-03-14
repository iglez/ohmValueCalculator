const calc = require('./utils/IOhmValueCalculator')

var params = process.argv.slice(2)
console.log( calc.calculateOhmValue(params[0], params[1], params[2], params[3]) )
