angular.module('crudProjetoSig')
 .controller('listaConfiguracaoCtrl',  function($q, $filter, $scope, $http, NgTableParams, configuracoes, $location, $route, configuracaoAPI) {
         $scope.app = "Lista de Configuração de Envio";

         function carregarLista(){
            $scope.tableParams = new NgTableParams({page: 1, count: 5}, { getData: getData});
            function getData(params){
               var tableData = [];
               tableData = configuracoes.data;
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
          }

         carregarLista();

         $scope.edit = function(idx) {
             $scope.item = $scope.tableParams.data[idx];
             $location.path("/editarCofiguracaoEnvio/"+$scope.item.id);
         };

         $scope.delete = function(item) {
             configuracaoAPI.excluirItem(item).success(function (data) {
               $route.reload();
            });
         };

         $scope.novo = function() {
             $location.path("/cadastroCofiguracaoEnvio");
         };


});
