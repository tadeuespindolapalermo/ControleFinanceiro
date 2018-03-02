// Componente da Box do Dashboard e do Ciclo de Pagamentos
angular.module('app').component('valueBox', {
    // Parâmetros de entrada do componente
    bindings: {
        grid: '@',
        colorClass: '@',
        value: '@',
        text: '@',
        iconClass: '@'
    },
    controller: [
        'gridSystem',
        function(gridSystem) {
            this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid)
        }
    ],
    template: `
    <div class="{{ $ctrl.gridClasses }}">
        <div class="small-box {{ $ctrl.colorClass }}">
            <div class="inner">
                <h3>{{ $ctrl.value }}</h3>
                <p>{{ $ctrl.text }}</p>
            </div>
            <div class="icon">
                <i class="{{ $ctrl.iconClass }}"></i>
            </div>
        </div>
    </div>
    `
});
