(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorRegistroMuerto', controladorRegistroMuerto);

  controladorRegistroMuerto.$inject = ['$stateParams','$state','servicioUsuarios'];

  function controladorRegistroMuerto($stateParams,$state,servicioUsuarios) {
    let vm = this;

    if(!$stateParams.objUsuarioTemp){
      $state.go('usuarios');
    }

    let objSinFormatoUsuario = JSON.parse($stateParams.objUsuarioTemp);

    let objUsuario = new Cliente (objSinFormatoUsuario.foto, objSinFormatoUsuario.nombre, objSinFormatoUsuario.apellido, objSinFormatoUsuario.cedula, objSinFormatoUsuario.provincia,  objSinFormatoUsuario.canton,  objSinFormatoUsuario.distrito,  objSinFormatoUsuario.ubicacion,  objSinFormatoUsuario.fechaNacimiento,  objSinFormatoUsuario.edad,  objSinFormatoUsuario.genero,  objSinFormatoUsuario.nombreUsuario,  objSinFormatoUsuario.contrasenna,  objSinFormatoUsuario.confirmarContrasenna);

    vm.nuevoMuerto = {};

    //listarMuertos();

    //vm.listaMuertos = servicioUsuarios.getMuerto(objUsuario);
    
    vm.registrarMuerto = (pnuevoMuerto) =>{
     

     let objNuevoMuerto = new Muerto (pnuevoMuerto.apodo, pnuevoMuerto.edad, pnuevoMuerto.genero, pnuevoMuerto.tamanno);

     servicioUsuarios.addMuerto(objNuevoMuerto,objUsuario);

     $state.go('usuarios');

     swal("Registro exitoso", "Se ha registrado correctamente el difunto", "success", {
        button: "Aceptar",
      });
     //listarMuertos ();

     vm.nuevoMuerto = null;
    
    }
    /*  function listarMuertos() {
      vm.listaMuertos = servicioUsuarios.getMuerto();
    } */
  }
})(); 