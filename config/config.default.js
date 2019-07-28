exports.keys = 'name=lyn;HttpOnly', 'id=1006;max-age=20'

exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    },
};

exports.home = {
    pageSize: 20,
    serverUrl: 'http://v.juhe.cn/toutiao/index',
};

exports.middleware = [
    'robot'
];
exports.robot = {
    ua: [
        /Baiduspider/i,
    ]
};




