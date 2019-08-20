const UserModel = require('../models/user')

module.exports = {
  async index( ctx ,next ){
    await ctx.render("login",{title:"用户登录页面"})
  },
  async login( ctx ,next ){
    ctx.body = ctx.request.body
  },
  async register( ctx ,next ){
    if (ctx.method === 'GET') {
      await ctx.render('register', {
        title: '用户登录'
      })
      return
    }
    let { name, email, password, repassword } = ctx.request.body;
    let errMsg = ''
    if(name===""){
      errMsg = '用户名不能为空'
    }else if(email === ""){
       errMsg = 'email不能为空'
    }else if(password === ''){
      errMsg = '密码不能为空'
    }else if (password !== repassword) {
      errMsg = '两次密码不一样'
    }
    if (errMsg) {
      ctx.body = { errMsg }
      return
    }
    ctx.body = ctx.request.body
  }
}