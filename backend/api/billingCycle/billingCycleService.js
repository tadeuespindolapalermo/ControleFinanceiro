/**
 * Expor os serviços que serão fornecidos via API Rest
 */

// Importações
const BillingCycle = require('./billingCycle')

// Cria API rest baseada no padrão rest em cima dos verbos http definidos no methods ('get', 'post', 'put', 'delete')
// GET - obtém informações do ciclo de pagamento
// POST - insere novo ciclo de pagamento
// PUT - altera um ciclo de pagamento existente
// DELETE - remove um ciclo de pagamento
BillingCycle.methods(['get', 'post', 'put', 'delete'])

// Exporta o ciclo de pagamento
module.exports = BillingCycle
