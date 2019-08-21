const router = require("koa-router")();

module.exports = (app) =>{
  // 登录页面
  router.get("/login",require("./user").index)
  // 登录数据接口
  router.post("/login",require("./user").login)

  // 用户注册
  router.get("/register",require("./user").register)
  router.post("/register",require("./user").register)

  // 首页
  router.get("/",require("./home").index)

  app.use(router.routes()).use(router.allowedMethods())

  app.use((ctx,next)=>{
    ctx.body = "<h1>404</h1>"
  })
}