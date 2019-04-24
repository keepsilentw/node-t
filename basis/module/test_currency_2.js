const Currency = require('./currency_2')

const canadianDollar = 0.91
const currency = new Currency(canadianDollar)

console.log(currency.canadianToUS(50))
console.log(currency.USToCanadian(30))
