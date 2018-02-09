/**
 * Diz em qual URL pode expor os serviços para que outra aplicação possa consumir
 */

// Inclusão da dependência express
const express = require('express')

// Em cima do server será definido as rotas, então server deve ser passado como parâmetro
module.exports = function(server) {
  
    // API Routes
    // Tudo que vier de /api será passado para o Middleware router
    const router = express.Router()
    server.use('/api', router)

    // rotas da API
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    // Todos os serviços usará como url raiz /billingCycles
    billingCycleService.register(router, '/billingCycles')
}
