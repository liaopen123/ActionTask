var request = require('request');

const url = 'http://custom.luyuan.cn/custom/signin/add';

const userCode = process.env.USERCODE
console.log("得到的userCode:${userCode}" + userCode)
// request.post({
//     url: url,
//     form: {
//         usercode: '北京'
//     }
// }, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body);// 请求成功的处理逻辑
//     }
// });