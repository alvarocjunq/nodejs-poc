//var connectionFactory = require('../persistence/connection-factory');
var ProdutoDao = require('../persistence/ProdutoDao');

module.exports = function(app) {
	app.get('/produtos', function (req, res){
		var dao = new ProdutoDao();
		
		dao.lista(function(errors, resultado, campos){
			if(errors){
				console.log(errors);
				res.send('<h1>Erro no BD</h1>');
				return;
			}

			//uso esse format, caso a minha aplicacao responda para mais de um tipo (webservice'json', tela'html')
			//se não estiver em um desses dois formatos chamados, o default é o primeiro declarado
			res.format({
				html: function(){ res.render('produtos/lista', {produtos: resultado}); },
				json: function(){ res.json(resultado); }
			})
		});
	});


	app.get('/produtos/novo', function (req, res){
		console.log('caiu no get')
		res.render('produtos/novo', {livro: {}});
	});
	
	app.get('/produtos/:id', function(request, response, next) {
		var id = request.params.id;
		
		var dao = new ProdutoDao();
		dao.obterPorId(id, function(errors, resultado, campos){
	    	if (errors) return next(errors);
	    	response.format({
				html: function(){ response.render('produtos/lista', {produtos: resultado}); },
				json: function(){ response.json(resultado); }
			})
	  	});
	});



	app.post('/produtos/novo',function(req, res){
		console.log('caiu no post')
		var livro = req.body;

		req.assert('titulo', 'Preencha o titulo').notEmpty();
		req.assert('preco', 'Preço tem que ser valor positivo').isFloat();
		
		var erros = req.validationErrors();
		if(erros){
			console.log('Há erros de validação');
			res.format({
				html: function(){ res.status(400).render('produtos/novo', {validationErrors:erros, livro:livro}) },
				json: function(){ res.status(400).send(erros) }
			});
			return;
		}

		var dao = new ProdutoDao();
		dao.salva(livro, function(errors){
			if(errors) console.log('erro ao salvar livro:', errors);
			res.redirect('/produtos');
		});
	});
};