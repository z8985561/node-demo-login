const Koa = require("koa");
const router = require("./routes")
const config = require("./config/config")
const app = new Koa();

router(app)



app.listen(config.port)
console.log(`Server runing at http://127.0.0.1:${config.port}`)