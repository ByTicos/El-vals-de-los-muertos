(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorRegistroMuerto', controladorRegistroMuerto);

  controladorRegistroMuerto.$inject = ['$stateParams','$state','servicioUsuarios'];

  function controladorRegistroMuerto($stateParams,$state,servicioUsuarios) {
    let vm = this;

<<<<<<< HEAD
    if(!$stateParams.objUsuarioTemp){
      $state.go('usuarios');
    }

    let objSinFormatoUsuario = JSON.parse($stateParams.objUsuarioTemp);

    let objUsuario = new Cliente (objSinFormatoUsuario.foto, objSinFormatoUsuario.nombre, objSinFormatoUsuario.apellido, objSinFormatoUsuario.cedula, objSinFormatoUsuario.provincia,  objSinFormatoUsuario.canton,  objSinFormatoUsuario.distrito,  objSinFormatoUsuario.ubicacion,  objSinFormatoUsuario.fechaNacimiento,  objSinFormatoUsuario.edad,  objSinFormatoUsuario.genero,  objSinFormatoUsuario.nombreUsuario,  objSinFormatoUsuario.contrasenna,  objSinFormatoUsuario.confirmarContrasenna);

    vm.nuevoMuerto = {};

    //listarMuertos();

    //vm.listaMuertos = servicioUsuarios.getMuerto(objUsuario);
=======

    

    vm.nuevoMuerto = {};

    listarMuertos();

>>>>>>> master
    
    vm.registrarMuerto = (pnuevoMuerto) =>{
     

     let objNuevoMuerto = new Muerto (pnuevoMuerto.apodo, pnuevoMuerto.edad, pnuevoMuerto.genero, pnuevoMuerto.tamanno);

<<<<<<< HEAD
     servicioUsuarios.addMuerto(objNuevoMuerto,objUsuario);

     $state.go('usuarios');
=======
     servicioUsuarios.addMuerto(objNuevoMuerto);

>>>>>>> master

     swal("Registro exitoso", "Se ha registrado correctamente el difunto", "success", {
        button: "Aceptar",
      });
<<<<<<< HEAD
     //listarMuertos ();

     vm.nuevoMuerto = null;
    
    }
    /*  function listarMuertos() {
      vm.listaMuertos = servicioUsuarios.getMuerto();
    } */
=======
     listarMuertos ();

     vm.nuevoMuerto = null;
    
    }
    function listarMuertos(){
    vm.listaMuertos = servicioUsuarios.getMuerto();
      
    }
     
>>>>>>> master
  }
})(); 