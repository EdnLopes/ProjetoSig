angular.module('crudProjetoSig').factory('configuracaoAPI', function($http, config) {

    var _getItems = function () {
           return $http.get(config.baseUrl + "/config/listar")
                        .success(function(data) {
                           setTimeout(function(){ reloadComponentesMaterializeCSS(); }, 100);
                            return data;
                     });
      };

   var _editarItem = function (id) {
      return $http.get(config.baseUrl + "/config/"+id)
                        .success(function(data) {
                           setTimeout(function(){ reloadComponentesMaterializeCSS(); }, 100);
                            return data;
                     });
   };

   var _alterarItem = function (item) {
      return $http.post(config.baseUrl + "/config/alterar", item);
   };

   var _salvarItem = function (item) {
      return $http.post(config.baseUrl + "/config/salvar", item);
   };

   var _excluirItem = function (item) {
      return $http.post(config.baseUrl + "/config/excluir", item);
   };

   return {
        getItems: _getItems,
        getIten: _editarItem,
        alterarItem: _alterarItem,
        salvarItem: _salvarItem,
        excluirItem: _excluirItem
      };
});