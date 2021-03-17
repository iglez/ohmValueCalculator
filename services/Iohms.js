const { calculateOhmValue, calculateTolerance } = require('../utils/IOhmValueCalculator')

const calculateIohmValue = (colors) => {
    return calculateOhmValue(
        colors['band-a'],
        colors['band-b'],
        colors['band-c'])
}

const calculateItolerance = (colors) => {
    return calculateTolerance(
        colors['band-d'])
}

module.exports = {
    calculateIohmValue,
    calculateItolerance
}