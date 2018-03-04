(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorRegistroRetoques', controladorRegistroRetoques);

  controladorRegistroRetoques.$inject = ['$stateParams', '$state', 'servicioUsuarios', 'servicioRetoques']

  function controladorRegistroRetoques($stateParams, $state, servicioUsuarios, servicioRetoques){
    let vm = this;
    vm.listaRetoques = servicioRetoques.obtenerRetoques();
  }

  
})();