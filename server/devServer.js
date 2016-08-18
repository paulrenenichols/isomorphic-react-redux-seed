var express = require('express'); // dependencies from npm (package.json)
var webpack         = require('webpack');
var webpackConfig   = require('../webpack.config.dev');

//Create Server
var app = express();

var compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));


app.get('/', function (req, res) {
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Test Document</title>
      </head>

      <body>
        <h1>What what!</h1>
      </body>

    </html>
  `);
});

// Server setup
var portNumber = process.env.SERVER_PORT || 3000;
app.listen(portNumber, 'localhost', function(error){
  if (error) {
    console.log(error);
    return;
  }
  console.log(`Server listening on: ${portNumber}`);
});
