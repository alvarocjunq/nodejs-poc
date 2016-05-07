var express = require('express');
var bodyparser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function(){
	var app = express();

	app.set('view engine', 'ejs');

	app.use(express.static('./public'));//deixei a pasta public acessivel ao client (idem pasta resources)
	app.use(bodyparser.urlencoded({extended: true}));
	app.use(bodyparser.json());//para receber application/json
	app.use(expressValidator());
	
	require('./routes/produtos')(app);
	require('./routes/promocoes')(app);

	//paginas de erro depois das rotas acima
	//Criacao de middleware para pagina 404
	app.use(function(req, res){
		res.status(404).render('erros/404');
	});

	//Criacao de middleware para pagina 500
	app.use(function(req, res){
		res.status(500).render('erros/500');
	});

	return app;
};
