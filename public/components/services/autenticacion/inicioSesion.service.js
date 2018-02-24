(() => {
  'use strict';
  angular
  .module('funeraria')
  .service('servicioLogin', servicioLogin);

  servicioLogin.$inject = ['$log','$http', 'servicioUsuarios'];

  function servicioLogin($log, $http, servicioUsuarios){

    let publicAPI = {
      inicioSesion : _inicioSesion
    }
    return publicAPI
    
    function inicioSesion (credenciales){
      let listaUsuarios = servicioUsuarios.getUsuarios;
      
      listaUsuarios.forEach(usuario => {
        if(pNombreUsuario == usuario.nombreUsuario && pContrasenna == usuario.contrasenna){
          window.location();
        }
        else{

        }
      });
     
    }
  }

});