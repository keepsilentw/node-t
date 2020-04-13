const Koa = require('koa')
const loggerAsync = require('./logger-async')
const app = new Koa()

app.use(loggerAsync())

app.use((ctx) => {
	ctx.body = 'async middleware'
})

app.listen(3000)
console.log('server is starting at port 3000')
