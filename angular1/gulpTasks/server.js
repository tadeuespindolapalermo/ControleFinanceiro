/**
  * Responsável por startar o servidor usando o gup web service
  */

const gulp = require('gulp')

/**
  * Task watch vai monitorar os arquivos no disco. Se houver alteração no arquivo, será disparado a task específica para regerar CSS, Javascript e Html.
  * O monitoramento será restrito a pasta da aplicação - app
  */
gulp.task('watch', () => {

})

// Será responsável por inicializar o servidor importado no gul web service
gulp.task('server', ['watch'], () => {

})
