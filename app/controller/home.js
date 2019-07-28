const Controller = require('egg').Controller;

class HomeController extends Controller{
    async index(){
         const ctx = this.ctx;
         const page = ctx.query.page || 1;
         const newsList = await ctx.service.home.list(page);
         const dataList = {
             list: newsList
         }
        //  console.log(this.app)
         console.log("==============controller")
         console.log(this.ctx.app)
        await this.ctx.render('home/home.nj',dataList);
    }

}

module.exports = HomeController;