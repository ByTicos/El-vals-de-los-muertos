(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorRegistroEntierro', controladorRegistroEntierro);

  controladorRegistroEntierro.$inject = ['$stateParams','$state','servicioEntierros'];

  function controladorRegistroEntierro($stateParams,$state,servicioEntierros) {
    let vm = this;


    

    vm.nuevoEntierro = {};

    listarEntierro();

    
    vm.nuevoEntierro = {};

    listaEntierro();

    
    vm.registrarEntierro = (pnuevoEntierro) =>{
     

     let objNuevoEntierro = new Entierro (pnuevoEntierro.fecha, pnuevoEntierro.horaInicio, pnuevoEntierro.horaFin, ppnuevoEntierro.prioridad);

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