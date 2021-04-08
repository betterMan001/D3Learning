const express = require('express');
const logger = require('morgan');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(logger('dev'))
app.use(express.static('./'))
app.listen(3000, () => {
    console.log('示例应用正在监听 3000 端口!');
});