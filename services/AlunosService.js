(function(){
    'use_strict';

    angular
    .module("fgf")
    .factory('AlunosService',function(){
           return {
                getNotas: () => console.log('notas')
           }
    })
    
})()