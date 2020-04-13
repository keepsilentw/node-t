const Koa = require('koa')
const fs = require('fs')
const loggerAsync = require('../middleware/logger-async')
const app = new Koa()

app.use(loggerAsync())

const Router = require('koa-router')

let home = new Router()

home.get('/', async (ctx) => {
	let html = `
	  <ul>
	    <li><a href="/page/hello">/page/hello</a></li>
	    <li><a href="/page/404">/page/404</a></li>
	  </ul>
	`
	ctx.body = html
})

let page = new Router()

page.get('/404', async (ctx) => {
  ctx.body = '404 page'
}).get('/hello', async (ctx) => {
	ctx.body = 'hello page'
})

let router = new Router()

router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
	console.log('router demo is starting at port 3000')
})