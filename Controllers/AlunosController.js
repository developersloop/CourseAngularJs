
(function(){

    'use_strict';

    angular.module("fgf")
    .controller('AlunosController',Controller)
  

    function Controller(
        $scope,
        AlunosService
    ) {

            var vm  = this;
            vm.titulo = 'Sistema com angular js';

            vm.editNotes = editNotes;
            vm.updateNotes  = updateNotes;
            vm.addAluno = addAluno;
            vm.excluirNotes = excluirNotes;
          
            // services

            vm.alunos =  AlunosService.getNotas();
            
           



            function editNotes(obj){
                vm.alunosEdit = obj;
            }

            function updateNotes(index,obj){
                vm.alunos[index] = obj;
                $('#editNotes').modal('hide')
                // obj.findIndex(funcion())
            }

            function excluirNotes(index,obj){
                vm.alunos.splice(index,1);
            }
       

            function addAluno(obj){
                // obj.media = vm.media(obj); 
                vm.alunos.push(obj);
                $('#exampleModal').modal('hide')
                // obj = {};

            }
    }
})();