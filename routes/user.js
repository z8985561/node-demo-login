const UserModel = require('../models/user')

module.exports = {
  async index( ctx ,next ){
    if(ctx.session.user){
      ctx.body = "您已登录";
      ctx.redirect('/')
    }
    await ctx.render("login",{title:"用户登录页面"})
  },
  async login( ctx ,next ){
    const { name, password } = ctx.request.body
    // ctx.body = ctx.request.body
    let user = await UserModel.findOne({name})
    let errMsg = "";
    if(!user.name){
      errMsg = "用户名错误或不存在"
    }else if(user.password != password){
      errMsg = "用密码错误"
    }
    if(errMsg){
      ctx.body = {errMsg,error:1}
      return;
    }
    ctx.session.user = user;
    ctx.body = {error:0,msg:"登录成功！"}
  },
  async register( ctx ,next ){
    if(ctx.session.user){
      ctx.body = "您已登录";
      ctx.redirect('/')
    }
    if (ctx.method === 'GET') {
      await ctx.render('register', {
        title: '用户注册'
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
      ctx.body = { errMsg,error:1 }
      return
    }

    await UserModel.create({ name, email, password},function(err,res){
      if(err) return ctx.body = err;
      ctx.body = { msg:"success" }
    })
    ctx.body = { msg:"success",error:0}

  }
}