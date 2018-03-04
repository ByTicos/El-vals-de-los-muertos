(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorRegistroRetoques', controladorRegistroRetoques);

  controladorRegistroRetoques.$inject = ['$stateParams', '$state', 'servicioUsuarios', 'servicioRetoques']

  function controladorRegistroRetoques($stateParams, $state, servicioUsuarios, servicioRetoques){
    let vm = this;
    vm.listaRetoques = servicioRetoques.obtenerRetoques();

    vm.agregarRetoqueaMuerto = (pRetoque) =>{
      console.log(pRetoque);
      

      let objNuevoRetoque = new Retoques(pRetoque);

     console.log('objeto con nuevo retoque');
     console.log(objNuevoRetoque);

  }

}
  
})();