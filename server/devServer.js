var express         = require('express'); // dependencies from npm (package.json)
var path            = require('path');
var webpack         = require('webpack');
var webpackConfig   = require('../webpack.config.dev');

var portNumber      = require('../portNumber');

//Create Server
var app = express();

var compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));


app.use('*', function (req, res, next) {
  var filename = path.join(compiler.outputPath,'index.html');
  compiler.outputFileSystem.readFile(filename, function(err, result){
    if (err) {
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
    res.end();
  });
});

// Server setup
app.listen(portNumber, 'localhost', function(error){
  if (error) {
    console.log(error);
    return;
  }
  console.log(`Server listening on: ${portNumber}`);
});
