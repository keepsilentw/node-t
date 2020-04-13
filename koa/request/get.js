const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
	let url = ctx.url

	let request = ctx.request
	let req_query = request.query
	let req_querystring = request.quertstring

	let ctx_query = ctx.query
	let ctx_querystring = ctx.quertstring

	ctx.body = {
		url,
		req_query,
		req_querystring,
		ctx_query,
		ctx_querystring
	}
})

app.listen(3000, () => {
	console.log('server is starting at port 3000')
})
