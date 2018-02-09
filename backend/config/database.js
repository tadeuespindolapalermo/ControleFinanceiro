/**
 * Configuração da conexão com o Banco de Dados MongoDB
 */

// Incluindo a dependência do Mongo
const mongoose = require('mongoose')

// Conexão
// Startar o mongo antes no console: sudo service mongod start (para Linux)
// Neste caso, não está sendo utilizado usuário e senha para o Banco
module.exports = mongoose.connect('mongodb://localhost/db_finance')

// Qualquer mensagem do tipo required seguirá esse padrão de escrita
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório!"
