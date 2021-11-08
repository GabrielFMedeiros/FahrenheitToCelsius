const convertor = require('fahrenheit-to-celsius')

function fahrenheit(number){
    var value;
    value = convertor(number);
    return value;
}
//console.log(fahrenheit(-459.67));
module.exports = { fahrenheit }