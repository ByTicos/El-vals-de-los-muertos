(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorRegistroRetoques', controladorRegistroRetoques);

  controladorRegistroRetoques.$inject = ['$stateParams', '$state', 'servicioUsuarios', 'servicioRetoques']

  function controladorRegistroRetoques($stateParams, $state, servicioUsuarios, servicioRetoques){
    let vm = this;
    vm.listaRetoques = servicioRetoques.obtenerRetoques();
<<<<<<< HEAD

    vm.agregarRetoqueaMuerto = (pRetoque) =>{
      console.log(pRetoque);
      

      let objNuevosRetoque = new Retoques(pRetoque);

     console.log('objeto con nuevo retoque');
     console.log(objNuevoRetoque);

  }

}
=======
  }


>>>>>>> origin/Esteban
  
})();