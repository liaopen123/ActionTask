var request = require('request');

const sign_url = 'http://custom.luyuan.cn/custom/signin/add';
const add_article = 'http://forum.luyuan.cn/api/article_add';
const reply_url = 'http://forum.luyuan.cn/api/article_comment?content=%E6%88%91%E4%B9%9F%E4%B9%B0%E4%BA%86++%E8%A7%89%E5%BE%97%E5%BE%88%E6%A3%92%E3%80%82&article_id=196252';

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
var userCode = process.env.USERCODE
console.log("得到的userCode:${userCode}" + userCode)
request.post({
    url: sign_url,
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
});

request.post({
    url: add_article,
    headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.67 Safari/537.36',
    },
    form: {
        usercode: userCode,
        title: "[天天等待有活动的一天]绿源在我心",
        content: "今天是" + year + '年' + month + '月' + day + '日 ' + ",期待绿源的 活动",
        type: "新品推荐"

    }
}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log("发帖结果1:"+body);// 请求成功的处理逻辑
    }
});

//发2个帖子
setTimeout(function () {

    request.post({
        url: add_article,
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.67 Safari/537.36',
        },
        form: {
            usercode: userCode,
            title: "[买家秀]起这么多天,依然很不错",
            content: "今天是" + year + '年' + month + '月' + day + '日 ' + ",电动自行车依然很给力！支持绿源",
            type: "买家秀"

        }
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
  console.log("发帖结果2:"+body);// 请求成功的处理逻辑
        }
    });


}, 10000);

//四条评论
function requestReply() {
    request.get({
        url: reply_url,
        headers: {
            "User-Agent": " Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
            "X-Requested-With": "XMLHttpRequest",
            "Referer": "http://forum.luyuan.cn/web_html/article_detail.html?id=196252",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Cookie": "UM_distinctid=175bb9b178e929-0cf52312fb0ef5-326e7207-60e640-175bb9b178f757; CNZZDATA1278518534=638112835-1607670467-http%253A%252F%252Fcustom.luyuan.cn%252F%7C1607821085; XSRF-TOKEN=eyJpdiI6IjJlZVNDUWtlNVZaWmowSVlpaENsUWc9PSIsInZhbHVlIjoiYzYxY3RtWGh5M0UrZndsZTJrNzJGSkk2S085Z0V6cW9DNnFkVTFiQ09rRWhwQ0lwWWlWUStLUWNKaTFMR3krQmVpdit0R0hFMDRObno2SHAxa3dzaHc9PSIsIm1hYyI6IjQ5MmFkMzhlMmU2NmNhZmRiNzJjM2ZkN2ViM2JhZjBiODc0OGI0YzAxMjY5MzkxNzg0NjllNTQ5MzJjYWU1NGEifQ%3D%3D; laravel_session=eyJpdiI6IlVTXC9RZFpaSDlxRlwvQks3dndVVEVtZz09IiwidmFsdWUiOiJJSlFqaVpnSEdIdCtidGhPNXNZd2h3QlwvMlp6MEl0dmtJYVhHOCtOc3JiNjN0VU4wYkZFaWtHWTI0ZzdxU25qcnJJM1N4ZXdBY1NIUnpHWEh5eGlBdVE9PSIsIm1hYyI6ImRmNjc5ZTNjZjZmYjkxYzExMTRjOTE0YmMyZjA0M2FhNDEwZDI5YmNlYjM4NWE1NTdlOTlhMzgyNmZhMjU3YTEifQ%3D%3D",

        }
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body); // 请求成功的处理逻辑
        }
    });
}

setTimeout(requestReply, 2000);
setTimeout(requestReply, 4000);
setTimeout(requestReply, 6000);
setTimeout(requestReply, 8000);
setTimeout(requestReply, 10000);



