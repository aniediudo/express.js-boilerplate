
/**
 * Module dependencies.
 */

var	express = require('express');

var app = module.exports = express.createServer();

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});


//Run Modes
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});


//Controllers
var Controllers = {
	Main: require('./controllers/index.js'),
	ModelName: require('./controllers/modelname.js')
};


// Routes
app.get('/',Controllers.Main.main);

app.get('/modelname', Controllers.ModelName.all);
app.get('/modelname/:id', Controllers.ModelName.search);
app.post('/modelname',Controllers.ModelName.add);
app.put('/modelname/:id',Controllers.ModelName.change);
app.del('/modelname/:id',Controllers.ModelName.remove);


app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
