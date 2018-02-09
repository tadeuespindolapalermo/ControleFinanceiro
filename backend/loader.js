// Chamada do servidor
const server = require('./config/server')

// Chamada do MongoDB
require('./config/database')

// Chamando as rotas
// É uma função, está sendo chamada e passado o server como parâmetro
require('./config/routes')(server)
