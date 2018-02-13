/**
 *  Arquivo de dependências, é responsável por gerar o arquivo com todas as dependências dentro do Build
 */

const gulp = require('gulp')

// [Tasks que são pré-requisito] para a task (deps)
gulp.task('deps', ['deps.js', 'deps.css', 'deps.fonts'])

gulp.task('deps.js', () => {

})

gulp.task('deps.css', () => {

})

gulp.task('deps.fonts', () => {

})
