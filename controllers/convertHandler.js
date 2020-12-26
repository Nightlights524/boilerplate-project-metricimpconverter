/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.possibleUnits = ["gal", "L", "lbs", "kg", "mi", "km"];
  
  this.getNum = function(input) {
    const unitIndex = input.search(/[A-Za-z]/);
    let result = input.slice(0, unitIndex);

    if (isNaN(result)) {
      return false;
    }

    return parseFloat(result);
  };
  
  this.getUnit = function(input) {
    const unitIndex = input.search(/[A-Za-z]/);
    let result = input.slice(unitIndex).toLowerCase();
    if (result === "l") {
      result = "L";
    }

    if (!this.possibleUnits.includes(result)) {
      return false;
    }

    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;

    switch (initUnit) {
      case "gal": result = "L"; break;
      case "L":   result = "gal"; break;
      case "lbs": result = "kg"; break;
      case "kg":  result = "lbs"; break;
      case "mi":  result = "km"; break;
      case "km":  result = "mi"; break;
      default:    result = "ERROR, INVALID UNIT!"; break;
    }
    
    return result;
  };
  
  this.spellOutUnit = function(unit) {
    let result;
    
    switch (unit) {
      case "gal": result = "gallons"; break;
      case "L":   result = "liters"; break;
      case "lbs": result = "pounds"; break;
      case "kg":  result = "kilograms"; break;
      case "mi":  result = "miles"; break;
      case "km":  result = "kilometers"; break;
      default:    result = "ERROR, INVALID UNIT!"; break;
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    switch (initUnit) {
      case "gal": result = initNum * galToL; break;
      case "L":   result = initNum / galToL; break;
      case "lbs": result = initNum * lbsToKg; break;
      case "kg":  result = initNum / lbsToKg; break;
      case "mi":  result = initNum * miToKm; break;
      case "km":  result = initNum / miToKm; break;
      default:    result = "ERROR, INVALID UNIT!"; break;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
