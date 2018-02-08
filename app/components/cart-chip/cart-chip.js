angular.module('ecommerce').component('cartChip', {
    template: '{{cp.getNumberItems()}}',
    controller: function(cartSrvc){
        this.getNumberItems = cartSrvc.getNumberItems
    },
    controllerAs: 'cp'
})