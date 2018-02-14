angular.module('app').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('dashboard', {
            // Atualiza o browser
            url: "/dashboard",
            // Carrega o template
            templateUrl: "dashboard/dashboard.html"
        }).state('billingCycle', {
            url: "/billingCycles",
            templateUrl: "billingCycle/tabs.html"
        })
    // Estado padrão, caso o estado seja inválido
    $urlRouterProvider.otherwise('/dashboard')
}])
