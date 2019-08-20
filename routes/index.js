const router = require("koa-router")();

module.exports = (app) =>{
  // 登录页面
  router.get("/login",require("./user").index)
  // 登录数据接口
  router.post("/login",require("./user").login)

  router.get("/register",require("./user").register)
  router.post("/register",require("./user").register)

  app.use(router.routes()).use(router.allowedMethods())

  app.use((ctx,next)=>{
    ctx.body = "<h1>404</h1>"
  })
}