// Back-end rodará na porta 3003.
const port = 3003

/**
 * Dependências
 */
// Possui funções middleware para fazer a interpretação do corpo da requisição (parse do body).
const bodyParser = require('body-parser')

// Incluindo o Framework Web Express para back-end.
const express = require('express')

// Criando o servidor iniciando o express.
const server = express()

// Permite Cross Origin Request para a Api
const allowCors = require('./cors')

// Permite fazer o parse do skip e limit na função refresh do billingCycleController
const queryParser = require('express-query-int')

// Urlencoded é o formato dos dados obtidos quando é feito a submissão de um formulário no front-end.
// Extended true é capaz de interpretar variados tipos de informações que venham na submissão de um formulário.
// Body parser é responsável por fazer a interpretação dos dados que venham a partir da submissão de um formulário.
// Use: toda requisição que chegar no back-end será passada pelo middleware urlencoded.
server.use(bodyParser.urlencoded({ extended: true }))

// Analisa se o corpo da requisição é um conteúdo json, se for, faz o parser transformando o json em um objeto para ser usado no back-end.
server.use(bodyParser.json())

// Permite fazer requisição de um domínio diferente do domínio da Api
server.use(allowCors)

// Faz parse ne query string e converte para inteiro
server.use(queryParser())

// Servidor escutando a porta do back-end, caso não esteja sendo usada.
// Chamar no console: npm run dev
server.listen(port, function() {
    console.log(`BACKEND is running  on port ${port}.`)
})

// Exporta o servidor
module.exports = server

/*
// Função própria que serve como Middleware
// Recebe requisição, resposta e o next como parâmetro
// Next é a cadeia de chamadas de um middleware para o outro
server.use(function(req, res, next) {
    console.log('Middleware 1')
    next()
})

server.use(function(req, res, next) {
    console.log('Middleware 2')
    res.send('Funcionou!!!')
})*/
