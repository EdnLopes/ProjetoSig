angular.module('crudProjetoSig').factory('configuracaoAPI', function($http) {

    var _getItems = function () {
           return $http.get('data.json')
                        .success(function(data) {
                            return data.configuracao;
                     });
      };


   var _saveItems = function (item) {
      return $http.post('data.json', item);
   };

   var _getItem = function (id) {

       var item = $http.get('data.json')
                        .success(function(data) {
                            for (i = 0; i < data.length; i++) {
                              console.log(data.configuracao[i].id);
                            }
                            return data.configuracao;
                     });
      return item;
   };

    return {
        getItems: _getItems,
        getItem: _getItem,
        saveItems: _saveItems
      };
});