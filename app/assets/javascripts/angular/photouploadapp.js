var photoUploadAppModule = angular.module('PhotoUploadApp',
  [ 'ngRoute',
    'ngResource',
    'templates'
  ]);

//Routes
photoUploadAppModule.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      templateUrl: '/assets/upload_images/index.html',
      controller: 'UploadCtrl'
    }).otherwise({
      redirectTo: '/'
    });
}]);
