angular.module('crudProjetoSig')
 .controller('editarConfiguracaoCtrl',  function($scope, editarIten, $route, $location, configuracaoAPI) {

   $scope.item = editarIten.data;

   $scope.voltar = function() {
            $scope.configuracaoForm.$setPristine();
            $location.path("/listaConfiguracaoEnvio");
         };

   $scope.gravar = function(item) {
      configuracaoAPI.alterarItem(item).success(function (data) {
         delete $scope.item;
         $scope.configuracaoForm.$setPristine();
         $location.path("/listaConfiguracaoEnvio");
      });

    };

});
