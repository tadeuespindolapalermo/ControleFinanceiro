(function () {

    angular.module('app').controller('AuthCtrl', [
        '$location',
        'msgs',
        AuthController
    ])

    function AuthController($location, msgs) {

        const vm = this

        vm.loginMode = true

        vm.changeMode = () => vm.loginMode = !vm.loginMode

        vm.login = () => {
            //auth.login(vm.user, err => err ? msgs.addError(err) : $location.path('/'))
            console.log(`Login... ${vm.user.email}`)
        }

        vm.signup = () => {
            //auth.signup(vm.user, err => err ? msgs.addError(err) : $location.path('/'))
            console.log(`Signup... ${vm.user.email}`)
        }

        vm.getUser = () => ({ name: 'Usuário MOCK', email: 'mock@cod3r.com.br' })

        vm.logout = () => {
            console.log('Logout...')
        }
    }

})()
