(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorAdministrador', controladorAdministrador);

  controladorAdministrador.$inject = ['servicioUsuarios','servicioAdministrador']

  function controladorAdministrador(servicioUsuarios, servicioAdministrador){
    let vm = this;

    vm.listaUsuarios = servicioUsuarios.getUsuarios();

    vm.listaMuertos = servicioUsuarios.getAllMuertos();
    
  }
})();