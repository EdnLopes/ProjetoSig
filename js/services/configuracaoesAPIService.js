angular.module('crudProjetoSig').factory('configuracaoAPI', function($http) {

    var _getItems = function () {
           return $http.get('data.json')
                        .success(function(data) {
                           setTimeout(function(){ reloadComponentesMaterializeCSS(); }, 100);
                            return data.configuracao;
                     });
      };


   var _saveItems = function (item) {
      // return $http.post('data.json', item);
      return $http.get('data.json')
                        .success(function(data) {
                           setTimeout(function(){ reloadComponentesMaterializeCSS(); }, 100);
                            return data.configuracao;
                     });
   };

   return {
        getItems: _getItems,
        saveItems: _saveItems
      };
});