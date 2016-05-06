var express = require('../../custom-express')();
var supertest = require('supertest')(express);

describe('#Produtos Route', function(){

	it('lista produtos em HTML',function(func_done){
		supertest.get('/produtos')
				 .set('Accept', 'text/html')
				 .expect('Content-Type', /html/)
				 .expect(200, func_done);
	});
});