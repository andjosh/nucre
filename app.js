
/**
  * Nucre: Make money with node.js
  *
  * @author Joshua Beckman <@jbckmn> || <jsh@bckmn.com>
  * @license The MIT license. 2013
  *
  */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , flash = require('connect-flash');

var app = express();

// all environments
app.set('port', process.env.PORT || 7000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(flash());
app.use(express.cookieParser('your secret here'));
app.use(express.cookieSession({ secret: 'another secret goes here', cookie: { maxAge: 1000*60*60 } })); // CHANGE THIS SECRET!
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler({ showStack: true }));
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// Setup routes
require('./routes')(app);
