const express = require('express');
const path = require('path');
const formidable = require('formidable');
//获取post参数的第三方模块
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/yanzheng', (req, res) => {
    console.log(req.query.email);
    res.send('验证成功')
});

app.get('/shurutishi', (req, res) => {
    console.log(req.query.key == '啊手动阀');
    res.send(['asdf', 'asdfgsdfg', 'xzvzv']);
});

app.post('/formdata', (req, res) => {
    let form = new formidable.IncomingForm();
    // 设置客户端上传文件存储在服务器的路径
    form.uploadDir = path.join(__dirname, 'public', 'upload');
    // 设置保留文件后缀
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        res.send({
            path: files.attrFile.path.split('public')[1]
        })

    })
    // console.log(req.body)
    // res.send('ok')
});

app.post('/json', (req, res) => {
    console.log(123)
    res.send(req.body);
})


app.listen(3000);
console.log('服务器启动成功');