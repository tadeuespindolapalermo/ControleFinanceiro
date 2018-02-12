/**
 * Expor os serviços que serão fornecidos via API Rest
 */

// Importações
const _ = require('lodash')
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

// Personalização de erros pela API
BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

// Função será executada depois do post e do put para tratar os erros
function sendErrorsOrNext(req, res, next) {
    const bundle = res.locals.bundle

    if (bundle.errors) {
        // Método parseErrors retorna um array a partir dos erros da validação do Mongoose
        var errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        next()
    }
}

function parseErrors (nodeRestfulErrors) {
    const errors = []
    // lodash
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}

// Serviço que retorna a quantidade de ciclos de pagamento que estão persistidas na collection do Mongo
// Será necessário no Front-end na implementação de paginação
BillingCycle.route('count', function (req, res, next) {
    BillingCycle.count(function(error, value) {
        if (error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

// Exporta o ciclo de pagamento
module.exports = BillingCycle
