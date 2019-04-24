const conadianDollar = 0.91

function roundTwo(amount) {
	return Math.round(amount * 100) / 100
}

exports.canadianToUS = canndian => roundTwo(canndian * conadianDollar)
exports.USToCanadian = us => roundTwo(us / conadianDollar)