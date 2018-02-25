(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorLogin', controladorLogin);

  controladorLogin.$inject = ['servicioUsuarios'];

  function controladorLogin(servicioUsuarios){
    let vm = this;

    vm.usuario = {};
    
    vm.inicarSesion = (pCredenciales) => {
      console.log(pCredenciales)
    } 
  }
})();