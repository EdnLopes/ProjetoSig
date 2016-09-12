angular.module('crudProjetoSig')
    .controller('crudProjetoSigCtrl',  ['$q', '$filter', '$scope', '$http', 'NgTableParams', 'configuracaoAPI', function($q, $filter, $scope, $http, NgTableParams, configuracaoAPI) {
        $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
            'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
            'WY').split(' ').map(function(state) {
                return {abbrev: state};
              });

            $scope.app = "Lista de Configuração de Envio";

            $scope.tableParams = new NgTableParams({page: 1, count: 5}, { getData: getData });

            function getData(params){

                return configuracaoAPI.getItems().then(function(response){
                           var tableData = [];
                           tableData =  response.data.configuracao;
                           var filteredData = params.filter() ?
                                    $filter('filter')(tableData, params.filter()) :
                                    data;
                            var orderedData = params.sorting() ?
                                    $filter('orderBy')(filteredData, params.orderBy()) :
                                    data;
                            params.total(orderedData.length);

                           return orderedData;
                         });
            }

       }]);
