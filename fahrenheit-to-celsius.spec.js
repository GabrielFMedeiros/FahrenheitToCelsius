const {fahrenheit} = require('./fahrenheitToCelsius');

describe('the fahrenheit to celsius canary spec', () => {
    it('shows the infra works', () => {
        expect(true).toBe(true);
    });
});

describe('a fahrenheitToCelsius function should', () =>{
    it('retunr 0 for 32', () =>{
        expect(fahrenheit(32)).toEqual(0);
    });
    
    it('retunr 10 for 50', () =>{
        expect(fahrenheit(50)).toEqual(10);
    });

    it('retunr 100 for 212', () =>{
        expect(fahrenheit(212)).toEqual(100);
    });

    it('retunr -40 for -40', () =>{
        expect(fahrenheit(-40)).toEqual(-40);
    });

    it('retunr -273,15 for -459,67', () =>{
        expect(fahrenheit(-459.67)).toEqual(-273.15);
    });
})