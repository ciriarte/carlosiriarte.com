/**
 * Module dependencies.
 */

var express = require('express')
, i18n    = require('i18n')
, routes  = require('./routes')
, http    = require('http')
, path    = require('path');

i18n.configure({
  // setup some locales - other locales default to en silently
  locales:['en', 'es', 'de']
});

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(i18n.init);
  app.use(function(req, res, next) {
    res.locals.__i = i18n.__;
    res.locals.__n = i18n.__n;
    next();
  });
 app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.all('/*', function(req, res, next) {
  if (req.headers.host.match(/^www/) !== null ) {
    res.redirect(301,'http://' + req.headers.host.replace(/^www\./, '') + req.url);
  } else {
    next();     
  }
});

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
