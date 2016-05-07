var mysql = require('mysql');

module.exports = function(){
	
	var config = {  connectionLimit : 10,
					host: 'localhost',
					//port: 1234
					database: 'casadocodigo',
					user: 'root',
					password: '' }

	//NODE_ENV = variavel de ambiente para definir se o ambiente é de testes, dev, prod..
	if(process.env.NODE_ENV == 'test'){
		console.log('rodou em teste');
		config.database = 'casadocodigo_teste';
	}

	//createPool ou createConnection
	return mysql.createPool(config);
}