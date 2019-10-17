(function(){
    'use_strict';

    angular
    .module("default")
    .factory('AlunosService',ServiceAluno)
    
    
  function ServiceAluno($http, $localStorage, $sessionStorage) {
    var service = {};

    service.getAll = getAll;

    function getAll(){
        return 'teste';
    }

    return service;
      
   }
})()