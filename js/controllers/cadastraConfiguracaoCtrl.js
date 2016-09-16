angular.module('crudProjetoSig')
 .controller('cadastraConfiguracaoCtrl',  function($scope, $location, configuracaoAPI, configuracaoCad) {

   $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
            'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
            'WY').split(' ').map(function(state) {
                return {abbrev: state};
              });

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
