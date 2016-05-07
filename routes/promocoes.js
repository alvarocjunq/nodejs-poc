module.exports = function(app){
	

	app.get('/skjbdsifdkfndijfl', function (req, res){
		console.log('get promocao');
		res.render('promocoes/nova');
	});

	app.post('/skjbdsifdkfndijfl', function(req, res){
		//console.log('post promocao');
		var titulo = req.body;
		//console.log('titulo', titulo);
		var io = app.get('socketIO');
		io.emit('promocao', titulo);

		res.redirect('/skjbdsifdkfndijfl');
	});
}