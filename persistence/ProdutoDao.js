function ProdutoDao(){
	this._con = require('./connection-factory')();
}

ProdutoDao.prototype.lista = function(callback){
	this._con.query('select * from livros', callback);
}

ProdutoDao.prototype.obterPorId = function(id, callback){
	this._con.query('select * from livros where id = ? ', [id], callback);
}

ProdutoDao.prototype.salva = function(livro, callback){
	this._con.query('insert into livros SET ?', livro, callback);
}

module.exports = ProdutoDao;
