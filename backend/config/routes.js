/**
 * Diz em qual URL pode expor os serviços para que outra aplicação possa consumir
 */

// Inclusão da dependência express
const express = require('express')

const auth = require('./auth')

// Em cima do server será definido as rotas, então server deve ser passado como parâmetro
module.exports = function(server) {

     /*
      * Rotas abertas
      */
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)

    /*
     * Rotas protegidas por Token JWT
     */
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)

    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(protectedApi, '/billingCycles')

    const billingSummaryService = require('../api/billingSummary/billingSummaryService')
    protectedApi.route('/billingSummary').get(billingSummaryService.getSummary)

    /**
     * Implementação para uso da aplicação sem autenticação
     */
    // API Routes
    // Tudo que vier de /api será passado para o Middleware router
    // const router = express.Router()
    // server.use('/api', router)

    // rotas da API
    // const billingCycleService = require('../api/billingCycle/billingCycleService')
    // Todos os serviços usará como url raiz /billingCycles
    // billingCycleService.register(router, '/billingCycles')

    // /api/billingSummary
    // const billingSummaryService = require('../api/billingSummary/billingSummaryService')
    // router.route('/billingSummary').get(billingSummaryService.getSummary)
}
