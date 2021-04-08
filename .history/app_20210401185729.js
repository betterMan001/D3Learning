const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(3000, () => {
    console.log('示例应用正在监听 3000 端口!');
})