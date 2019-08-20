const router = require("koa-router")();

module.exports = app =>{
  router.get("/home",(ctx,next)=>{
    ctx.body = "home"
  })

  app.use(router.routes()).use(router.allowedMethods())

  app.use((ctx,next)=>{
    ctx.body = "<h1>404</h1>"
  })
}