(function() {
    angular.module('app').controller('BillingCycleCtrl', [
        '$http',
        'msgs',
        'tabs',
        BillingCycleController
    ])

    function BillingCycleController($http, msgs, tabs) {
        const vm = this
        const url = 'http://localhost:3003/api/billingCycles'

        vm.refresh = function () {
            $http.get(url).then(function(response) {
                vm.billingCycle = {credits: [{}], debts: [{}]}
                vm.billingCycles = response.data
                tabs.show(vm, {tabList: true, tabCreate: true})
            })
        }

        vm.create = function () {
            $http.post(url, vm.billingCycle).then(function(response) {
                vm.refresh()
                msgs.addSuccess('Operação realizada com sucesso!!')
            }).catch(function(resp) {
                msgs.addError(resp.data.errors)
            })
        }

        vm.showTabUpdate = function(billingCycle) {
            vm.billingCycle = billingCycle
            tabs.show(vm, {tabUpdate: true})
        }

        vm.update = function() {
            const updateUrl = `${url}/${vm.billingCycle._id}`
            $http.put(updateUrl, vm.billingCycle).then(function(response) {
                vm.refresh()
                msgs.addSuccess('Operação realizada com sucesso!')
            }).catch(function(resp) {
                msgs.addError(resp.data.errors)
            })
        }

        vm.showTabDelete = function(billingCycle) {
            vm.billingCycle = billingCycle
            tabs.show(vm, {tabDelete: true})
        }

        vm.delete = function() {
            const deleteUrl = `${url}/${vm.billingCycle._id}`
            $http.delete(deleteUrl, vm.billingCycle).then(function(response) {
                vm.refresh()
                msgs.addSuccess('Operação realizada com sucesso!')
            }).catch(function(resp) {
                msgs.addError(resp.data.errors)
            })
        }
        vm.refresh()
    }
})()
