<<<<<<< HEAD
(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorRegistroRetoques', controladorRegistroRetoques);

  controladorRegistroRetoques.$inject = ['servicioRetoques']

<<<<<<< HEAD
<<<<<<< HEAD
  function controladorRetoques($stateParams, $state, servicioUsuarios){
    let vm = this;

    // aqui validamos que el paramatero exista, en caso de que no exista nos redijirá al estado anterior
    if(!$stateParams.objMuertoTemp){
      $state.go('registrarMuertos');
    }

    let objSinFormatoMuerto = JSON.parse($stateParams.objMuertoTemp);
=======
  function controladorRetoques( $state, servicioUsuarios){
    let vm = this;

    // aqui validamos que el paramatero exista, en caso de que no exista nos redijirá al estado anterior
    
    
>>>>>>> master

    let objMuerto = new Muerto (objSinFormatoVehiculo.apodo, objSinFormatoVehiculo.edad, objSinFormatoVehiculo.genero,objSinFormatoVehiculo.tamanno);

    vm.infoMuertos = objMuerto.getInfoMuerto();

    listaRetoques();

=======
  function controladorRegistroRetoques(servicioRetoques){
    let vm = this;

>>>>>>> origin/Aaron
    vm.nuevoRetoque = {};
    vm.listaRetoques = listarRetoques();

    listarRetoques();

    vm.agregarNuevoRetoque = (pnuevoRetoque) => {
      console.log(pnuevoRetoque);

      let objNuevoRetoque = new Retoques(pnuevoRetoque.id, pnuevoRetoque.nombre, pnuevoRetoque.costo);

      console.log('objeto con usuario');
      console.log(objNuevoRetoque);

      servicioRetoques.agregarRetoques(objNuevoRetoque);

      // Retroalimentación Visual para los usuarios
      swal("Registro exitoso", "El retoque ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      vm.nuevoRetoque = null;
      listarRetoques();
    }


    function listarRetoques() {
      vm.listaRetoques = servicioRetoques.obtenerRetoques();
    }
  }
})();
=======
>>>>>>> origin/Katherine
