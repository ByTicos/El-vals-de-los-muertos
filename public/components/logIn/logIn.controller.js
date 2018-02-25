(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorLogin', controladorLogin);

  controladorLogin.$inject = ['servicioLogin'];

  function controladorLogin(servicioLogin){
    let vm = this;

    vm.usuario = {};
    
    vm.inicarSesion = (pCredenciales) => {
      let inicioCorrecto = servicioLogin.inicioSesion(pCredenciales);

      if(inicioCorrecto == true){
        swal("Datos correctos", "Sesion iniciada correctamente", "success");
      }
      else{
        swal("Datos erroneos", "asfasf", "error");
      }
    } 
  }
})();