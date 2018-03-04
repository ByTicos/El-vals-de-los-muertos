(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorRegistroMuerto', controladorRegistroMuerto);

  controladorRegistroMuerto.$inject = ['$stateParams','$state','servicioUsuarios'];

  function controladorRegistroMuerto($stateParams, $state, servicioUsuarios) {

    let vm = this;
    vm.nuevoMuerto = {};
    

    listarMuertos();

   

    vm.agregarnuevoMuerto = (pnuevoMuerto) =>{
     let objNuevoMuerto = new Muerto (pnuevoMuerto.apodo, pnuevoMuerto.edad, pnuevoMuerto.genero, pnuevoMuerto.tamanno);

     servicioUsuarios.addMuerto(objNuevoMuerto);


     swal("Registro exitoso", "Se ha registrado correctamente el difunto", "success", {
        button: "Aceptar",
      });
     listarMuertos ();

     vm.nuevoMuerto = null;
    
    }
    
     
    

    vm.editarMuertos=(pApodoMuerto,pEdadMuerto,pGeneroMuerto,pTamannoMuerto)=>{
      document.querySelector('#apodo').value=pApodoMuerto;
      document.querySelector ('#edad').value = pEdadMuerto;
      document.querySelector('#genero').value=pGeneroMuerto;
      document.querySelector('#tamanno').value=pTamannoMuerto;
      document.querySelector('#btnRegistrar').classList.add('ocultar');
    }

    
  

     function listarMuertos() {
      vm.listaMuertos = servicioUsuarios.getMuerto();
    }
  }
})(); 