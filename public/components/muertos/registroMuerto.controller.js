(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorRegistroMuerto', controladorRegistroMuerto);

  controladorRegistroMuerto.$inject = ['servicioUsuarios'];

  function controladorRegistroMuerto($stateParams, $state, servicioUsuarios) {

    let vm = this;
    vm.nuevoMuerto = {};
    

    listarMuertos();

   

    vm.agregarnuevoMuerto = (pnuevoMuerto) =>{
     let objNuevoMuerto = new Muerto (pnuevoMuerto.apodo, pnuevoMuerto.edad, pnuevoMuerto.genero, pnuevoMuerto.tamanno);

     let objNuevoMuerto = new Muerto(pnuevoMuerto.apodo, pnuevoMuerto.edad, pnuevoMuerto.genero, pnuevoMuerto.tamanno);

     console.log('objeto con nuevo muerto');
     console.log(objNuevoMuerto);

     servicioUsuarios.agregarMuerto(objNuevoMuerto);

     swal("en todas","ahi vamos", "success",{ button:"aceptar",});

     vm.nuevoMuerto = null;
    
    listarMuertos();
    }
     function listarMuertos() {
      vm.listaMuertos = servicioUsuarios.obtenerMuerto();
    }
  }
})(); 