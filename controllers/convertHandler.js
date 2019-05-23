/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    var index = /[a-z]/i.exec(input).index;
    if (index===0) return 1;
    
    var num = input.slice(0, index);
    if(num.indexOf('/')==-1){
      if(isNaN(num)) return "invalid number";
      result = Number(num);
    } else {
      var inputArr = num.split('/');
      if(inputArr.length > 2) return "invalid number";
      if(isNaN(inputArr[0]) || isNaN(inputArr[1])) return "invalid number";
      result = Number(inputArr[0])/Number(inputArr[1])
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var measureUnit = ['gal','l','mi','km','lbs','kg']
    var firstLetter = /[a-z]/i;
    result = input.slice(input.indexOf(firstLetter.exec(input))).toLowerCase();
    
    for(var i = 0 ; i < measureUnit.length;i++){
      if(result==measureUnit[i]) return result
    }
    return "invalid unit";
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    var initialUnit = initUnit.toLowerCase();
    
    switch(initialUnit){
      case 'mi' : result = 'km'; break;
      case 'km' : result = 'mi'; break;
      case 'gal' : result = 'l'; break;
      case 'l' : result = 'gal'; break;
      case 'lbs' : result = 'kg'; break;
      case 'kg' : result = 'lbs'; break;
      default : result = "invalid unit"; break;
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    var initialUnit = unit.toLowerCase();
    
    switch(initialUnit){
      case 'mi' : result = 'miles'; break;
      case 'km' : result = 'kilometers'; break;
      case 'gal' : result = 'gallons'; break;
      case 'l' : result = 'liters'; break;
      case 'lbs' : result = 'pounds'; break;
      case 'kg' : result = 'kilograms'; break;
      default : result = "invalid unit"; break;
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    var initialUnit = initUnit.toLowerCase();
    
    switch(initialUnit){
      case 'mi' : result = initNum*miToKm; break;
      case 'km' : result = initNum/miToKm; break;
      case 'gal' : result = initNum*galToL; break;
      case 'l' : result = initNum/galToL; break;
      case 'lbs' : result = initNum*lbsToKg; break;
      case 'kg' : result = initNum/lbsToKg; break;
      default : result = "Error"; break;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    if(initNum =='invalid number' & initUnit == 'invalid unit') result = initNum +' and unit';
    else if (initNum == 'invalid number') result = initNum;
    else if (initUnit == 'invalid unit') result = initUnit;
    else result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum.toFixed(5) + ' ' +this.spellOutUnit(returnUnit);
    
    return result;
  };
  
}

module.exports = ConvertHandler;
