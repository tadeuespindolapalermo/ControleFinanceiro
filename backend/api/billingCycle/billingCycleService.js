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

// Na requisição UPDATE (PUT), sempre retorna um objeto novo e não um objeto antigo
// No Update, aplica as validações nos atributos (runValidators)
BillingCycle.updateOptions({new: true, runValidators: true})

// Exporta o ciclo de pagamento
module.exports = BillingCycle
