var express =require('express');
var app = express();
var PORT = 3000; 

var middleware ={
	requireAuthentication: function(req, res, next){
		console.log('private information accesed !');
		next()
	},
	logger: function(req, res, next){
		console.log('Request :' + new Date().toString() + ' '+req.method +' '+req.originalUrl);
		next();
	}
};

app.get('/',function(req,res){
	res.send('hello express');

});

app.use(middleware.logger);

app.use(express.static(__dirname + '/public'));

app.get('/about',middleware.requireAuthentication,function(req,res){
	res.send('about us ! ')
});
app.get('/Emilence',function(req,res){
	res.send('about emilence')
});
app.listen(PORT ,function(){
	console.log('express server is running on port '+ PORT +' !')
});