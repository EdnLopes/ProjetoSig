angular.module('crudProjetoSig').factory('configuracaoAPI', function($http) {

    return {
      getItems: function () {
         return  $http.get('data.json')
                        .success(function(data) {
                            return data.configuracao;
                        });
      }
    }
});