/**
 * Serviço de Sumário de Pagamentos
 */

// Dependência do lodash para utilizar vários recursos se necessário
const _ = require('lodash')

// Dependência para a entidade
const BillingCycle = require('../billingCycle/billingCycle')

// Mais uma função middleware responsável por sumarizar todos os siclos de pagamento
function getSummary (req, res) {
    BillingCycle.aggregate ({
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
      }, {
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
      }, {
        $project: {_id: 0, credit: 1, debt: 1}
      }, function (error, result) {
        if (error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(_.defaults(result[0], {credit: 0, debt: 0}))
        }
    })
}

module.exports = { getSummary }
