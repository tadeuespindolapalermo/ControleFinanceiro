/**
 * Este arquivo é a porta de entrada do Gulp, ele que será disparado.
 * Gulp é usado para automatizar o processo de Build.
 * Concatena, minifica e aloca os arquivos
 */

const gulp = require('gulp')
const util = require('gulp-util')

// Invoca todas as taks em sequência
const sequence = require('run-sequence')

// Importação para ter acesso às tasks
require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/server')

// Conveção a ser seguida (task 'default')
// Função é chamada quando o comando gulp é executado indiretamente através do comando npm run dev ou npm run production
gulp.task('default', () => {
    if (util.env.production) {
        // Em produção
        sequence('deps', 'app')
    } else {        
        sequence('deps', 'app', 'server')
    }
})
