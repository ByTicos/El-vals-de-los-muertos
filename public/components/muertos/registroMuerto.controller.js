(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorRegistroMuerto', controladorRegistroMuerto);

  controladorRegistroMuerto.$inject = ['$stateParams','$state','servicioUsuarios'];

  function controladorRegistroMuerto($stateParams,$state,servicioUsuarios) {
    let vm = this;


    

    vm.nuevoMuerto = {};

    listarMuertos();

    
    vm.registrarMuerto = (pnuevoMuerto) =>{
     

     let objNuevoMuerto = new Muerto (pnuevoMuerto.apodo, pnuevoMuerto.edad, pnuevoMuerto.genero, pnuevoMuerto.tamanno);

     servicioUsuarios.addMuerto(objNuevoMuerto);


     swal("Registro exitoso", "Se ha registrado correctamente el difunto", "success", {
        button: "Aceptar",
      });
     listarMuertos ();

     vm.nuevoMuerto = null;
    
    }
    function listarMuertos(){
    vm.listaMuertos = servicioUsuarios.getMuerto();
      
    }
     
  }
})(); 