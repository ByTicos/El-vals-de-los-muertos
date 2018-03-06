(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorRegistroEntierro', controladorRegistroEntierro);

  controladorRegistroEntierro.$inject = ['$stateParams','$state','servicioEntierros'];

  function controladorRegistroEntierro($stateParams,$state,servicioEntierros) {
    let vm = this;

    vm.nuevoEntierro = servicioEntierros.obtenerEntierro();

    
    vm.nuevoEntierro = {};

    listarEntierro();

    
    vm.nuevoEntierro = {};

    listaEntierro();

    
    vm.registrarEntierro = (pnuevoEntierro) =>{
      console.log(pnuevoEntierro);

    let objNuevoEntierro = angular.fromJson(pnuevoEntierro);


     let objNuevoEntierro = new Entierro (pnuevoEntierro.fecha, pnuevoEntierro.horaInicio, pnuevoEntierro.horaFin, ppnuevoEntierro.prioridad);

     console.log('objeto con nuevo entierro');
     console.log(objNuevoEntierro);

     servicioUsuarios.addEntierro(objNuevoEntierro);


     swal("Registro exitoso", "Se ha registrado correctamente el difunto", "success", {
        button: "Aceptar",
      });
     listarEntierro ();

     vm.nuevoEntierro = null;
    
    }
    function listaEntierro(){
    vm.listaEntierro = servicioUsuarios.getEntierro();
      
    }
     
  }
})(); 

 