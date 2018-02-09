// Ciclo de Pagamento

/**
 * Dependências
 */
// Node restful => Forma simples de expor uma API rest para o Front-end, para quem quiser consumir a API
// Integração entre Express e Mongoose, crua uma API rest de forma simplificada
const restful = require('node-restful')
const mongoose = restful.mongoose

// Esquema, informações de como será armazenado o crédito dentro do MongoDB
// Crédito => saldo positivo
// Mapeamento do crédito
const creditSchema = new mongoose.Schema({
    // Atributos
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true }
})

// Débito => O que precisa ser pago
// Mapeamento do débito
const debtSchema = new mongoose.Schema({
    // Atributos
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: [true, 'Informe o valor do débito!'] },
    status: { type: String, required: false, uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

// Mapeando o ciclo de pagamento
const billingCycleSchema = new mongoose.Schema({
    // Atributos
    name: { type: String, required: true },
    month: { type: Number, min: 1, max: 12, required: true },
    year: { type: Number, min: 1970, max: 2100, required: true },
    credits: [creditSchema],
    debts: [debtSchema]
})

// Exportando módulo para importação do mesmo com require em outros arquivos
module.exports = restful.model('BillingCycle', billingCycleSchema)
