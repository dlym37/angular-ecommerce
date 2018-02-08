angular.module('ecommerce').component('product', {
    templateUrl: 'app/components/product/product.html',
    controller: function (cartSrvc) {
        
    },
    controllerAs: 'pd',
    bindings: {
        product: '<',//one-way binding
                     //= two-way binding
                     //@ string binding
                     //& action binding
        buttonLabel: '@',
        buttonAction: '&'
    }
})