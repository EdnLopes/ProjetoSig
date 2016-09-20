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
		resolve: {
			configuracaoCad: function (){
            setTimeout(function(){ reloadComponentesMaterializeCSS(); }, 100);
         }
		}
	});

   $routeProvider.when("/editarCofiguracaoEnvio/:id", {
      templateUrl: "view/cadastroCofiguracaoEnvio.html",
      controller: "editarConfiguracaoCtrl",
      resolve: {
         editarIten: function (configuracaoAPI, $route) {
             return configuracaoAPI.getIten($route.current.params.id);
         }
      }
   });

   $routeProvider.otherwise({redirectTo:"/listaConfiguracaoEnvio"})
});
