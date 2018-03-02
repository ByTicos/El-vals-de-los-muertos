(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorRegistroRetoques', controladorRegistroRetoques);

  controladorRegistroRetoques.$inject = ['servicioRetoques']

  function controladorRegistroRetoques(servicioRetoques){
    let vm = this;

    vm.nuevoRetoque = {};
    vm.listaRetoques = listarRetoques();

    listarRetoques();

    vm.agregarNuevoRetoque = (pnuevoRetoque) => {
      console.log(pnuevoRetoque);

      let objNuevoRetoque = new Retoques(pnuevoRetoque.id, pnuevoRetoque.nombre, pnuevoRetoque.costo);

      console.log('objeto con usuario');
      console.log(objNuevoRetoque);

      servicioRetoques.agregarRetoques(objNuevoRetoque);

      // Retroalimentación Visual para los usuarios
      swal("Registro exitoso", "El retoque ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      vm.nuevoRetoque = null;
      listarRetoques();
    }


    function listarRetoques() {
      vm.listaRetoques = servicioRetoques.obtenerRetoques();
    }
  }
})();