const { calculateOhmValue } = require('../utils/IOhmValueCalculator')

const calculateIohmValue = (colors) => {
    return calculateOhmValue(
        colors['band-a'],
        colors['band-b'],
        colors['band-c'])
}

module.exports = {
    calculateIohmValue
}