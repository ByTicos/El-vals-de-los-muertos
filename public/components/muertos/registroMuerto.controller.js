(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorRegistroMuerto', controladorRegistroMuerto);

  controladorRegistroMuerto.$inject = ['servicioUsuarios'];

  function controladorRegistroMuerto(servicioUsuarios) {
    let vm = this;
    vm.nuevoMuerto = {};
    vm.listaMuertos=listarMuertos();
    listarMuertos();

   

    vm.agregarnuevoMuerto = (pnuevoMuerto) =>{
     console.log(pnuevoMuerto);

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