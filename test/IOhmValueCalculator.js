var assert = require('assert');
var expect = require('expect.js');

const calc = require('../utils/IOhmValueCalculator')

describe('IOhmValueCalculator', function() {
  describe('calculateOhmValue', function() {

    it('should exepct a number', function() {
        expect(calc.calculateOhmValue('Red', 'red', 'orange', 'gold')).to.be.a('number');
    });

    it('should return 22000 on Red, red, orange, gold', function() {
        assert.strictEqual(calc.calculateOhmValue('Red', 'red', 'orange', 'gold'), 22000);
    });

    it('should return 22000 on Red, red, orange, gold UpperCase', function() {
        assert.strictEqual(calc.calculateOhmValue('RED', 'RED', 'ORANGE', 'GOLD'), 22000);
    });

    it('should return 22000 on Red, red, orange, gold Spaces start and end', function() {
        assert.strictEqual(calc.calculateOhmValue(' RED', 'RED ', ' ORANGE ', '  GOLD'), 22000);
    });

    it('should return 22000 on Red, red, orange, gold Upper and lower', function() {
        assert.strictEqual(calc.calculateOhmValue('ReD', 'REd', 'oraNge', 'goLd'), 22000);
    });

    it('should return 22000 on Red, red, orange, gold Upper and lower and space', function() {
        assert.strictEqual(calc.calculateOhmValue('ReD', ' REd', '  oraNge', 'goLd   '), 22000);
    });

    it('should return 470 on Yellow, violet, brown, gold', function() {
        assert.strictEqual(calc.calculateOhmValue('Yellow', 'violet', 'brown', 'gold'), 470);
    });
    
    it('should return 68 on Blue, grey, black, gold', function() {
        assert.strictEqual(calc.calculateOhmValue('Blue', 'grey', 'black', 'gold'), 68);
    });

    it('should throw an error on number band A color', function() {
        expect(calc.calculateOhmValue).withArgs(1, 'red', 'orange', 'gold').to.throwException(function(e) {
            expect(e.message).to.be('The Band A Color (1) is not on the list chart of colors');
        });
    });

    it('should throw an error on number band B color', function() {
        expect(calc.calculateOhmValue).withArgs('Blue', 2, 'orange', 'gold').to.throwException(function(e) {
            expect(e.message).to.be('The Band B Color (2) is not on the list chart of colors');
        });
    });

    it('should throw an error on number band C color', function() {
        expect(calc.calculateOhmValue).withArgs('Blue', 'red', 3, 'gold').to.throwException(function(e) {
            expect(e.message).to.be('The Band C Color (3) is not on the list chart of colors');
        });
    });

    it('shold throw error on undefined on Band A color', function() {
        expect(calc.calculateOhmValue).withArgs(undefined, 'red', 'orange', 'gold').to.throwException(function(e) {
            expect(e.message).to.be('The Band A Color () is not on the list chart of colors');
        });
    });

    it('shold throw error on undefined on Band B color', function() {
        expect(calc.calculateOhmValue).withArgs('Blue', undefined, 'orange', 'gold').to.throwException(function(e) {
            expect(e.message).to.be('The Band B Color () is not on the list chart of colors');
        });
    });

    it('shold throw error on undefined on Band C color', function() {
        expect(calc.calculateOhmValue).withArgs('Blue', 'red', undefined, 'gold').to.throwException(function(e) {
            expect(e.message).to.be('The Band C Color () is not on the list chart of colors');
        });
    });

  });
});