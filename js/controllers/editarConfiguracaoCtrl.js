angular.module('crudProjetoSig')
 .controller('editarConfiguracaoCtrl',  function($scope, configuracaoItens, $route, $location, configuracaoAPI) {

   for(i=0 ; i < configuracaoItens.data.configuracao.length; i++){
      if ($route.current.params.id == configuracaoItens.data.configuracao[i].id){
        $scope.item = configuracaoItens.data.configuracao[i];
      }
   }

   $scope.voltar = function() {
             $location.path("/listaConfiguracaoEnvio");
         };

   $scope.gravar = function(item) {
      configuracaoAPI.saveItems(item).success(function (data) {
         delete $scope.item;
         $scope.configuracaoForm.$setPristine();
         $location.path("/listaConfiguracaoEnvio");
      });

    };

});
