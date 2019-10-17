

(function(){
	angular
	.module("fgf",['ui.router'])
	.config(config)


	function config(
		$stateProvider,
		$urlRouterProvider
	) {
		   const homeState =  {
			name:'home',
			cache: false,
			url: '/home',
			templateUrl:"templates/Alunos.html",
			controller:"AlunosController",
			controllerAs : 'vm'
		}

	 
		$urlRouterProvider.otherwise('/home');

		$stateProvider.state(homeState);
	  }
})()
