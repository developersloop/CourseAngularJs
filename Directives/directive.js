
(function(){
    'use_strict';


// = is two-way binding
// @ simply reads the value (one-way binding)
// & is used to bind functions

    angular
    .module('fgf')
    .directive('notes',[direct])

    function direct(){
        return {
            restrict: 'EA', // element only
             scope:{
                data: "ngInit"
             },
             templateUrl: "templates/Directives/notas.html"
        }
    }
})()