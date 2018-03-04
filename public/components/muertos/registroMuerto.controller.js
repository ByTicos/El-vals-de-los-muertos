(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorRegistroMuerto', controladorRegistroMuerto);

  controladorRegistroMuerto.$inject = ['servicioUsuarios'];

<<<<<<< HEAD
  function controladorRegistroMuerto($stateParams, $state, servicioUsuarios) {

    let vm = this;
    vm.nuevoMuerto = {};
    

=======
  function controladorRegistroMuerto(servicioUsuarios) {
    let vm = this;
    vm.nuevoMuerto = {};
    vm.listaMuertos=listarMuertos();
>>>>>>> origin/Esteban
    listarMuertos();

   

    vm.agregarnuevoMuerto = (pnuevoMuerto) =>{
<<<<<<< HEAD
     let objNuevoMuerto = new Muerto (pnuevoMuerto.apodo, pnuevoMuerto.edad, pnuevoMuerto.genero, pnuevoMuerto.tamanno);
=======
     console.log(pnuevoMuerto);
>>>>>>> origin/Esteban

     let objNuevoMuerto = new Muerto(pnuevoMuerto.apodo, pnuevoMuerto.edad, pnuevoMuerto.genero, pnuevoMuerto.tamanno);

     console.log('objeto con nuevo muerto');
     console.log(objNuevoMuerto);

     servicioUsuarios.agregarMuerto(objNuevoMuerto);

     swal("en todas","ahi vamos", "success",{ button:"aceptar",});

     vm.nuevoMuerto = null;
    
    listarMuertos();
    }
     function listarMuertos() {
<<<<<<< HEAD
      vm.listaMuertos = servicioUsuarios.getMuerto();
=======
      vm.listaMuertos = servicioUsuarios.obtenerMuerto();
>>>>>>> origin/Esteban
    }
  }
})(); 