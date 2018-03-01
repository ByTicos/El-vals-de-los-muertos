(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorRetoques', controladorRetoques);

  controladorRetoques.$inject = ['$stateParams', '$state', 'servicioUsuarios']

  function controladorRetoques( $state, servicioUsuarios){
    let vm = this;

    // aqui validamos que el paramatero exista, en caso de que no exista nos redijirá al estado anterior
    
    

    let objMuerto = new Muerto (objSinFormatoVehiculo.apodo, objSinFormatoVehiculo.edad, objSinFormatoVehiculo.genero,objSinFormatoVehiculo.tamanno);

    vm.infoMuertos = objMuerto.getInfoMuerto();

    listaRetoques();

    vm.nuevoRetoque = {};

    vm.listaRetoques = servicioUsuarios.getRetoques(objMuerto);

    vm.registrarRetoque = (pnuevoRetoque) => {

      let objRetoque = new Retoques(pnuevoRetoque.tipo, pnuevoRetoque.nombre, pnuevoRetoque.costo)

      servicioUsuarios.addRetoques(objMuerto, objRetoque);

      listaRetoques();

      swal("Registro exitoso", "Se ha registrado correctamente un nuevo retoque", "success", {
        button: "Aceptar",
      });

      vm.nuevoRetoque = null;
    }

    vm.volver = () => {
      $state.go('registrarMuertos');
    }

    function listaRetoques(){
      vm.listaRetoques = servicioUsuarios.getRetoques(objMuerto);
    }
  }
})();