/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      let input = '32L';
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });
    
    test('Decimal Input', function(done) {
      let input = '32.5L';
      assert.equal(convertHandler.getNum(input), 32.5);
      done();
    });
    
    test('Fractional Input', function(done) {
      let input = '32/5L';
      assert.equal(convertHandler.getNum(input), 32 / 5);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      let input = '1.1/2.2L';
      assert.equal(convertHandler.getNum(input), 1.1 / 2.2);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      let input = '32/2/3L';
      assert.isFalse(convertHandler.getNum(input));
      done();
    });
    
    test('No Numerical Input', function(done) {
      let input = 'L';
      assert.equal(convertHandler.getNum(input), 1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      let expected = ['gal','L','mi','km','lbs','kg','gal','L','mi','km','lbs','kg'];
      input.forEach(function(element, index) {
        assert.equal(convertHandler.getUnit(element), expected[index]);
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      let input = "kipperismyfavorite";
      assert.isFalse(convertHandler.getUnit(input));
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','L','mi','km','lbs','kg'];
      let expect = ['L','gal','km','mi','kg','lbs'];
      input.forEach(function(element, index) {
        assert.equal(convertHandler.getReturnUnit(element), expect[index]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','L','mi','km','lbs','kg'];
      let expect = ['gallons','liters','miles','kilometers','pounds','kilograms'];
      input.forEach(function(element, index) {
        assert.equal(convertHandler.spellOutUnit(element), expect[index]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      let input = [5, 'gal'];
      let expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      let input = [5, 'L'];
      let expected = 1.32086;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
      let input = [5, 'mi'];
      let expected = 8.0467;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      let input = [5, 'km'];
      let expected = 3.10686;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
      let input = [5, 'lbs'];
      let expected = 2.26796;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      let input = [5, 'kg'];
      let expected = 11.02312;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
  });

});