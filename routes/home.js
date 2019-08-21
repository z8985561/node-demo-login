module.exports ={
  async index(ctx,next){
    if(!ctx.session.user){
      ctx.redirect('/login')
    }
    await ctx.render("home",{title:"點滴的博客"})
  }
}