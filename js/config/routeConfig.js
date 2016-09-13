angular.module("crudProjetoSig").config(function ($routeProvider) {
	$routeProvider.when("/listaConfiguracaoEnvio", {
		templateUrl: "view/listaConfiguracaoEnvio.html",
		controller: "listaConfiguracaoCtrl",
      resolve: {
			configuracoes: function (configuracaoAPI) {
				return configuracaoAPI.getItems();
			}
      }
	});
	$routeProvider.when("/cadastroCofiguracaoEnvio", {
		templateUrl: "view/cadastroCofiguracaoEnvio.html",
		controller: "cadastraConfiguracaoCtrl",
	// 	resolve: {
	// 		operadoras: function (operadorasAPI) {
	// 			return operadorasAPI.getOperadoras();
	// 		}
	// 	}
	});

   $routeProvider.when("/editarCofiguracaoEnvio/:id", {
      templateUrl: "view/cadastroCofiguracaoEnvio.html",
      controller: "editarConfiguracaoCtrl",
      resolve: {
         configuracao: function (configuracaoAPI) {
            return configuracaoAPI.getItems();
         }
      }
   });

   $routeProvider.otherwise({redirectTo:"/listaConfiguracaoEnvio"})
});
