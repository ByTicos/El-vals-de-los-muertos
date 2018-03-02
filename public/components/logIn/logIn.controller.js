(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorLogin', controladorLogin);

  controladorLogin.$inject = ['$location', 'servicioLogin'];

  function controladorLogin($location, servicioLogin){
    let vm = this;

    vm.usuario = {};
    
    vm.inicarSesion = (pCredenciales) => {
      let inicioCorrecto = servicioLogin.inicioSesion(pCredenciales);

      if(inicioCorrecto == true){
        swal("Datos correctos", "Sesion iniciada correctamente", "success");
<<<<<<< HEAD
          if(pCredenciales.nombreUsuario == 'admin'){
            $location.path('/admin');
          }
          else{
            $location.path('/muertos');
          }
=======
        $location.path('/users');
>>>>>>> origin/Katherine
      }
      else{
        swal("Datos erroneos", "asfasf", "error");
      }
    } 
  }
})();