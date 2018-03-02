angular.module('app').constant('consts', {
    appName: 'Controle Financeiro',
    version: '1.0',
    owner: 'Tadeu E. P.',
    year: '2018',
    site: 'http://www.codigofonteonline.com.br/',
    apiUrl: 'http://localhost:3003/api',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
    $rootScope.consts = consts
}])
