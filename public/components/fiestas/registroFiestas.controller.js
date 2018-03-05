(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorRegistroFiestas', controladorRegistroFiestas);

  controladorRegistroFiestas.$inject = ['$stateParams', '$state', 'servicioUsuarios']

  function controladorRegistroFiestas($stateParams, $state, servicioUsuarios){
    let vm = this;

    // aqui validamos que el paramatero exista, en caso de que no exista nos redijirá al estado anterior
    if(!$stateParams.objMuertoTemp){
      $state.go('muertos');
    }

    let objSinFormatoMuerto = JSON.parse($stateParams.objMuertoTemp);

    let objMuerto = new Muerto (objSinFormatoMuerto.apodo, objSinFormatoMuerto.edad, objSinFormatoMuerto.genero, objSinFormatoMuerto.tamanno);

    vm.infoMuerto = objMuerto.getInfoMuerto();

    listaFiestas();

    vm.nuevaFiesta = {};

    vm.listarFiestas = servicioUsuarios.obtenerFiesta(objMuerto);

    vm.registrarFiesta = (nuevaFiesta) => {

      let objFiesta = new Fiestas(nuevaFiesta.fecha, nuevaFiesta.duracion, nuevaFiesta.costo)

      servicioUsuarios.addFiesta(objMuerto, objFiesta);

      listaFiestas();

      swal("Registro exitoso", "Se ha registrado correctamente la Fiesta", "success", {
        button: "Aceptar",
      });

      vm.nuevaFiesta = null;
    }

    vm.volver = () => {
      $state.go('muertos');
    }

    function listaFiestas(){
      vm.listaFiestas = servicioUsuarios.obtenerFiesta(objMuerto);
    }
  }
})();