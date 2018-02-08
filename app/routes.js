angular.module('ecommerce').config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url:'/',
    templateUrl:'app/views/home/home.html',
    controller:'homeCtrl'
  }).state('products', {
    url:'/products',
    templateUrl:'app/views/productList/productList.html',
    controller:'productListCtrl'
  }).state('cart', {
    url:'/cart',
    // templateUrl:'app/views/cart/cart.html'
    component: 'cart' //only done when there is 1 component
  }).state('components', {
    url:'/components',
    templateUrl:'app/views/components/components.html',
    controller:'componentsCtrl'
  })

  $urlRouterProvider.otherwise('/');
})
