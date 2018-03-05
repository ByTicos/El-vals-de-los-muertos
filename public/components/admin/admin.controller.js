(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorAdministrador', controladorAdministrador);

  controladorAdministrador.$inject = ['servicioUsuarios','servicioAdministrador','servicioRetoques']

  function controladorAdministrador(servicioUsuarios, servicioAdministrador, servicioRetoques){
    let vm = this;

    vm.listaUsuarios = servicioUsuarios.getUsuarios();

    vm.listaMuertos = servicioUsuarios.getAllMuertos();

    vm.nuevoRetoque = {};
    vm.listaRetoques = listarRetoques();

    listarRetoques();

    vm.eliminarUsuario = (pCedula) => {
      console.log(pCedula);
      servicioUsuarios.eliminarUsuario(pCedula);
      vm.listaUsuarios = servicioUsuarios.getUsuarios();
    }
    
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