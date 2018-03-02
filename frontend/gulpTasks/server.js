/**
  * Responsável por startar o servidor usando o gup web service
  */

const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

/**
  * Task watch vai monitorar os arquivos no disco. Se houver alteração no arquivo, será disparado a task específica para regerar CSS, Javascript e Html.
  * O monitoramento será restrito a pasta da aplicação - app
  */
gulp.task('watch', () => {
    // Arquivos modificados desparam as tasks
    watch('app/**/*.html', () => gulp.start('app.html'))
    watch('app/**/*.css', () => gulp.start('app.css'))
    watch('app/**/*.js', () => gulp.start('app.js'))
    watch('assets/**/*.*', () => gulp.start('app.assets'))
})

// Será responsável por inicializar o servidor importado no gul web service
gulp.task('server', ['watch'], () => {
    return gulp.src('public').pipe(webserver({
        // Configurações do Web Service
        // Sempre que a pasta pública mudar, ocorre reload na aplicação e refresh no browser
        livereload: true,
        // Porta 3000
        port: 3000,
        // Abre o Browser automaticamente
        open: true
    }))
})
