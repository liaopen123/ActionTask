var request = require('request');

const url = 'http://custom.luyuan.cn/custom/signin/add';

var userCode = process.env.USERCODE
console.log("得到的userCode:${userCode}" + userCode)
request.post({
    url: url,
    headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.67 Safari/537.36',
    },
    form: {
        usercode: userCode
    }
}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);// 请求成功的处理逻辑
    }
}).set('Cookie', 'UM_distinctid=175bb9b178e929-0cf52312fb0ef5-326e7207-60e640-175bb9b178f757');