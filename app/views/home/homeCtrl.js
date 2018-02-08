angular.module('ecommerce').controller('homeCtrl', function($scope, productSrvc, cartSrvc){
  // This will load up our dailyDealts on the $scope
  productSrvc.getDailyDeals().then(products=>{
    $scope.products = products;
  });

  $scope.addItem = cartSrvc.addItem;
})
