(function(){
    'use_strict';

    angular
    .module("fgf")
    .factory('AlunosService',[Service])
    

    function Service(){
        var service = {};

        service.getNotas = getNotas;

        function getNotas(){
            let alunos = [
                {id:1,nome:'vitor vicente',email:"vitor@vitor.com.br",nota1:10,nota2:20,nota3:40},
                {id:2,nome:'pedro',email:"pedro@pedro.com.br",nota1:30,nota2:50,nota3:30},
                {id:3,nome:'marcio',email:"marcio@marcio.com.br",nota1:80,nota2:20,nota3:10},
            ]
            return alunos;
        }

        return service;
    }
})()