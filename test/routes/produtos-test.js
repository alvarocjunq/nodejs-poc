var express = require('../../custom-express')();
var supertest = require('supertest')(express);

describe('#Produtos Route', function(){

	it('lista produtos em HTML',function(func_done){
		supertest.get('/produtos')
				 .set('Accept', 'text/html')
				 .expect('Content-Type', /html/)
				 .expect(200, func_done);
	});

	it('cadastra produto novo',function(func_done){
		supertest.post('/produtos/novo')
				 .set({titulo: 'LivroTeste', descricao: '', preco: '40.5'})
				 .expect(302, func_done); //302 - cod status de redirect
	});

});

