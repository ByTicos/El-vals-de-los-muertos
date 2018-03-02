(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorRegistroRetoques', controladorRegistroRetoques);

  controladorRegistroRetoques.$inject = ['servicioRetoques']

  function controladorRegistroRetoques(servicioRetoques){
    let vm = this;

    vm.nuevoRetoque = {};
    
    vm.agregarNuevoRetoque = (pnuevoRetoque) => {
      console.log(pnuevoRetoque);
    }
  }
})();