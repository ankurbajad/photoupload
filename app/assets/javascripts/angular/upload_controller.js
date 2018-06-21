photoUploadAppModule.controller('UploadCtrl', ['$scope','$http','$rootScope','$location','Upload',function ($scope,$http,$rootScope,$location,Upload) {

  $scope.photos = Upload.get_images();
  
  var formdata = new FormData();

  $scope.getFile = function(image) {
    formdata.append("file", image);
    var request = {
      method: 'POST',
      url: '/upload_images.json',
      data: formdata,
      headers: {'Content-Type': undefined},
      transformRequest : angular.identity
    };
    $http(request)
      .then(function (response) {
        $scope.photos.push(response.data.image);
      })
  };

}]);
