(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorFiestas', controladorFiestas);

  controladorFiestas.$inject = ['$stateParams', '$state', 'servicioUsuarios'];

  function controladorFiestas($stateParams, $state, servicioUsuarios){
    let vm = this;
  }

  if(!$stateParams.objVehiculoTemp){
    $state.go('vehiculos');
  }














})(); 