const Koa = require("koa");
const path = require('path')
const serve = require('koa-static')
const views = require('koa-views')
const session = require('koa-session')
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')

const router = require("./routes")
const CONFIG = require("./config/config")
const app = new Koa();

mongoose.connect(CONFIG.mongodb)

app.keys = ['jszen']

app.use(bodyParser())

app.use(session({
  key: CONFIG.session.key,
  maxAge: CONFIG.session.maxAge
}, app))

app.use(serve(
  path.join(__dirname, 'public')
))

app.use(views(path.join(__dirname, 'views'), {
  map: { html: 'nunjucks' }
}))

// 执行路由
router(app)


app.listen(CONFIG.port)
console.log(`Server runing at http://127.0.0.1:${CONFIG.port}`)