(function () {

    angular.module('app').controller('AuthCtrl', [
        '$location',
        'msgs',
        AuthController
    ])

    function AuthController($location, msgs) {

        const vm = this

        vm.getUser = () => ({ name: 'Usuário MOCK', email: 'mock@cod3r.com.br' })

        vm.logout = () => {
            console.log('Logout...')
        }
    }
    
})()
