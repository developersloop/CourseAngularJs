angular.module("fgf",['ngRoute'])

.config(function($routeProvider){
	$routeProvider
	.when('/home',{
          // template:"<h1>Home Page</h1>",
          templateUrl:"templates/Alunos.html",
		  controller:"AlunosController",
		  controllerAs : 'vm'
	})
	.when("/contato",{
		  template:"<h1>adad</h1>"
	})
	

	$routeProvider.otherwise({redirectTo:"/home"});

})