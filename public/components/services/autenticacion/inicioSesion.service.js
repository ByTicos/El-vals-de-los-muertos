(() => {
  'use strict';
  angular
  .module('funeraria')
  .service('servicioLogin', servicioLogin);

  servicioLogin.$inject = ['$log','$http', 'servicioUsuarios','servicioSesion'];

  function servicioLogin($log, $http, servicioUsuarios, servicioSesion){

    let publicAPI = {
      inicioSesion : _inicioSesion
    }
    return publicAPI
    
    function _inicioSesion(credenciales) {
      
      let allUser = servicioUsuarios.retornarUsuario();
      let incioExitoso = false;

      for(let i = 0; i<allUser.length; i++){
        if(allUser[i].obtenerNombreUsuario() == credenciales.correo && allUser[i].obtenerContrasenna() == credenciales.contrasenna){
          servicioSesion.create(
            {
              nombre: allUser[i].obtenerNombreCompleto(),
              cedula: allUser[i].obtenerCedula()
            }
          );
          incioExitoso = true;
        }
      }

      return incioExitoso;
    }
  }

});