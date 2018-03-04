(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorFiestas', controladorFiestas);

  controladorFiestas.$inject = ['$stateParams', '$state', 'servicioUsuarios'];

  function controladorFiestas($stateParams, $state, servicioUsuarios){
    let vm = this;
  }

  if(!$stateParams.objMuertoTemp){
    $state.go('vehiculos');
  }

  let objSinFormatoMuerto = JSON.parse($stateParams.objMuertoTemp);

  let objMuerto = new Muerto (objSinFormatoMuerto.apodo, objSinFormatoMuerto.edad, objSinFormatoMuerto.genero);
















})(); 