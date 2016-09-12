angular.module('crudProjetoSig', ['ngMaterial', "ngTable"])

            .controller('crudProjetoSigCtrl',  ['$scope', '$http','ngTableParams' , function($scope, $http, ngTableParams) {
                $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
                    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
                    'WY').split(' ').map(function(state) {
                        return {abbrev: state};
                      });

                    $scope.app = "Lista de Configuração de Envio";
                    var tableData = []
                        //Configuração da tabela
                        $scope.tableParams = new ngTableParams({
                            page: 1,
                            count: 5
                        },{
                            total:tableData.length,
                            //Retorna o conteudo do JSON
                            getData : function($defer,params){
                                $http.get('data.json').then(function(response) {
                                    tableData = response.data.configuracao;
                                    $defer.resolve(tableData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                                    params.total(tableData.length);
                                });
                            }
                        });

               }]);
