var da
var fs = require('fs')
fs.readFile('./bar.json', 'utf-8', function (err, data) {
  if (err) {
    console.log(err)
  } else {
    da = data
  }
});