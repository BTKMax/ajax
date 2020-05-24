const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// 查询用户列表
app.get('/user', (req, res) => {
    res.send('获取user列表');
});

// 按照id查询用户
app.get('/user/:id', (req, res) => {
    res.send(req.params.id);
});

// 按照id删除用户
app.delete('/user/:id', (req, res) => {

});

// 按照id修改用户信息
app.put('/user/:id', (req, res) => {
    req.body
});

// 添加用户

app.listen(3002);
console.log('服务器启动成功');