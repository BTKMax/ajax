const express = require('express');
const body = require('body-parser');
const path = require('path');
const app = express();
// app.use(express.static(path.join(__dirname, 'public')));
app.use(body.urlencoded({extended: false}));
app.get('/tongYuan', (req, res) => {
    console.log(123);
    console.log(req)
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.send(req.query.callback + '(' + JSON.stringify(req.query) + ')');
    res.send(req.query.cb + '({name: "zhangsan"})');

    // res.jsonp({
    //     name: 'zhangsan',
    //     age: 18
    // });
});

app.listen(3001);
console.log('服务器启动成功');