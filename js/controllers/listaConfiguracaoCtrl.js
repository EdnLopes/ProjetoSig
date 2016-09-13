angular.module('crudProjetoSig')
 .controller('listaConfiguracaoCtrl',  function($q, $filter, $scope, $http, NgTableParams, configuracoes, $location) {
         $scope.app = "Lista de Configuração de Envio";

         $scope.tableParams = new NgTableParams({page: 1, count: 5}, { getData: getData});

         function getData(params){
            var tableData = [];
            tableData = configuracoes.data.configuracao;
            var filteredData = params.filter() ?
                     $filter('filter')(tableData, params.filter()) :
                     data;
             var orderedData = params.sorting() ?
                     $filter('orderBy')(filteredData, params.orderBy()) :
                     data;
            params.total(orderedData.length);
            if (params.total() <= ((params.page() - 1) * params.count())) {
                params.page(1);
            }
            return orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
          }



         $scope.edit = function(idx) {
             $scope.item = $scope.tableParams.data[idx];
             console.log($scope.item.id);
             $location.path("/editarCofiguracaoEnvio/"+$scope.item.id);
         };

         $scope.delete = function(idx) {
             var i = $scope.tableParams.data[idx];
             console.log('excluir:', i);
         };

         $scope.novo = function() {
             $location.path("/cadastroCofiguracaoEnvio");
         };


});
