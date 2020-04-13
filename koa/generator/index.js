const Koa = require('koa')
const convert = require('koa-convert')
const loggerGenerator = require('./logger-generator')
const app = new Koa()

app.use(convert(loggerGenerator()))

app.use((ctx) => {
	ctx.body = 'convert generator'
})

app.listen(3000)
console.log('server is starting at port 3000')
