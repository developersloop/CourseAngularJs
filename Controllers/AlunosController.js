
(function(){

    'use_strict';

    angular.module("fgf")
    .controller('AlunosController',Controller)
  

    function Controller(
        $scope,
        AlunosService
    ) {

        console.log(AlunosService.getNotas());
            var vm  = this;
            vm.titulo = 'Sistema com angular js';
            // objeto de alunos

            vm.alunos = [
                {nome:'vitor vicente',email:"vitor@vitor.com.br",nota1:10,nota2:20,nota3:40},
                {nome:'pedro',email:"pedro@pedro.com.br",nota1:30,nota2:50,nota3:30},
                {nome:'marcio',email:"marcio@marcio.com.br",nota1:80,nota2:20,nota3:10},
            ]

            // metodo media

            // vm.media = function(aluno){
            //     let media =  (aluno.nota1 + aluno.nota2 + aluno.nota3)/3;
            //     return media.toFixed(2);
                
            // }

       

            vm.addAluno = function(obj){
                obj.media = vm.media(obj); 
                vm.alunos.push(obj);
                $('#exampleModal').modal('hide')
                obj = {};
            }
    }
})();