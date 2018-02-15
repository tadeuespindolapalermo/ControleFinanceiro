/**
 * factory para transformar uma string de números em uma string de classes CSS do Bootstrap
 */
angular.module('app').factory('gridSystem', [ function() {
    function toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''

        if(cols[0]) classes += `col-xs-${cols[0]}`
        if(cols[1]) classes += ` col-sm-${cols[1]}`
        if(cols[2]) classes += ` col-md-${cols[2]}`
        if(cols[3]) classes += ` col-lg-${cols[3]}`
        return classes
    }
    // Retorna um objeto (notação atual)
    return { toCssClasses }
}])

/*
'12' -> 'col-xs-12'
'6' -> 'col-xs-6'
'12 6' -> 'col-xs-12 col-sm-6'
'12 6 4 2' -> 'col-xs-12 col-sm-6 col-md-4 col-lg-2'
xs - celular
sm - tablet
md - computador pequeno
lg - tela grande
*/
