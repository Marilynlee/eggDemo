const Service = require('egg').Service;

class HomeService extends Service {
    async list(page = 1) {
        // read config
        const {
            serverUrl,
            pageSize
        } = this.config.home;

        // use build-in http client to GET hacker-news api
        const {data:{result}} = await this.ctx.curl(`${serverUrl}`, {
            data: {
                type: "top",
                key: "3dc86b09a2ee2477a5baa80ee70fcdf5",
                pageSize,
                page
            },
            dataType: 'json',
        });
// console.log(this.app)
console.log("++++++++++++++++service")
console.log(this.ctx.app)
        return result.data;
    }
}

module.exports = HomeService;