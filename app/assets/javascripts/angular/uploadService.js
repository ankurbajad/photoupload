photoUploadAppModule.factory('Upload', ['$resource',function($resource){
  return $resource('/upload_images/:id:format/:action:actionFormat',{ id: "@id", format: ".json" },{
    query:  {method: 'GET', isArray:true},
    get_images:{method: 'GET' ,params: {action: 'images',format: '',actionFormat: '.json'},isArray:true},
    save:{method: 'POST'}
   });
}]);
