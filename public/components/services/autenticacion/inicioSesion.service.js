(() => {
  'use strict';
  angular
  .module('funeraria')
  .service('servicioLogin', servicioLogin);

  servicioLogin.$inject = ['$log','$http', 'servicioUsuarios'];

  function servicioLogin($log, $http, servicioUsuarios){
    
    const asyncLocalStorage = {
      setItem: function (key, value) {
          return Promise.resolve().then(() => {
              let response = true;
              localStorage.setItem(key, JSON.stringify(value));
              return response
          });
      }
    };

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