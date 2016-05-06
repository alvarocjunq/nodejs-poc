var mysql = require('mysql');

module.exports = function(){
	
	//NODE_ENV = variavel de ambiente para definir se o ambiente é de testes, dev, prod..
	if(!process.env.NODE_ENV){
		console.log('rodou em dev');
		return mysql.createPool({
				connectionLimit : 10,
				host: 'localhost',
				//port: 1234
				database: 'casadocodigo',
				user: 'root',
				password: ''
		});
	}

	//createPool
	//createConnection
	if(process.env.NODE_ENV == 'test'){
		console.log('rodou em teste');
		return mysql.createPool({
				connectionLimit : 10,
				host: 'localhost',
				//port: 1234
				database: 'casadocodigo',
				user: 'root',
				password: ''
			});
	}
}