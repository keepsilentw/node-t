const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())

app.use(async (ctx) => {
	if (ctx.url === '/' && ctx.method === 'GET') {
		let html = `
		  <h1>koa2 post demo</h1>
      <form method="POST" action="/">
        <p>username</p>
        <input name="username" /><br/>
        <p>password</p>
        <input name="password" /><br/>
        <button type="submit">submit</button>
      </form>
		`
		ctx.body = html
	} else if (ctx.url === '/' && ctx.method === 'POST') {
		let postData = ctx.request.body
		ctx.body = postData
	} else {
		ctx.body = '404'
	}
})

app.listen(3000, () => {
	console.log('server is starting at port 3000')
})
