var express = require('express');
var app = express();
const fs = require('fs');
const path = require('path');



app.set('view engine', 'jade');
app.set('views', './views');
app.use('/static', express.static(path.resolve(process.cwd(), 'public')));

app.get('/', function (req, res) {
  fs.readFile('./data-lives.json', (err, data) => {
    if (err) throw err;
    let content = JSON.parse(data);
    res.render('demo0001/index', {
      xtz: 'Igoist',
      lives: content.lives
    });
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
