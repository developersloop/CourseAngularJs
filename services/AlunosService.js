(function(){
    'use_strict';

    angular
    .module("fgf")
    .factory('AlunosService',function(){
           return {
                getNotas: function(){
                    let alunos = [
                        {nome:'vitor vicente',email:"vitor@vitor.com.br",nota1:10,nota2:20,nota3:40},
                        {nome:'pedro',email:"pedro@pedro.com.br",nota1:30,nota2:50,nota3:30},
                        {nome:'marcio',email:"marcio@marcio.com.br",nota1:80,nota2:20,nota3:10},
                    ]
                    return alunos;
                }
           }
    })
    
})()