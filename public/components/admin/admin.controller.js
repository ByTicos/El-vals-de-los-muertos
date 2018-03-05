(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorAdministrador', controladorAdministrador);

  controladorAdministrador.$inject = ['servicioUsuarios','servicioAdministrador','servicioRetoques','servicioLugares']

  function controladorAdministrador(servicioUsuarios, servicioAdministrador, servicioRetoques,servicioLugares){
    let vm = this;

    vm.listaUsuarios = servicioUsuarios.getUsuarios();

    vm.listaMuertos = servicioUsuarios.getAllMuertos();

    vm.nuevoRetoque = {};
    vm.listaRetoques = listarRetoques();

    listarRetoques();




   /*MIO----------------------------------------*/
    vm.nuevoLugar = {};
    vm.listaLugares = listarLugares();
    listarLugares();
    /*MIOOOOO------------------------------------------------*/

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
    /*
    //Registro de Animadores

    vm.nuevoAnimador = {};
    vm.listaAnimador = listarAnimador();

    listarAnimador();
    // Función que es llamda desde el html para registra un nuevo usuario
    vm.registrarAnimador = (pnuevoAnimador) => {

      console.log(pnuevoAnimador);

      // Tomamos el objeto sin formato y lo comvertimos en una instancia de la clase cliente
      let objNuevoAnimador = new Animadores(pnuevoAnimador.id, pnuevoAnimador.apodo, pnuevoAnimador.costo);

     
      console.log('objeto con usuario');
      console.log(objNuevoAnimador);

      // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
      servicioAnimadores.agregarAnimador(objNuevoAnimador);

      // Retroalimentación Visual para los usuarios
      swal("Registro exitoso", "El Animador ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      // Se limpia el formulario
      vm.nuevoAnimador = null;
      listarAnimador();
    }

    function listaAnimador() {
      vm.listaAnimador = servicioAnimadores.obtenerAnimador();
    }
    */


    /*------------------Registro Lugares-------------------------------*/

   vm.agregarNuevoLugar = (pnuevoLugar) => {
    console.log(pnuevoLugar);

    let objNuevoLugar = new Lugares (pnuevoLugar.id, pnuevoLugar.lugar);

    console.log('objeto con nuevo lugar');
    console.log(objNuevoLugar);
    servicioLugares.agregarLugares(objNuevoLugar);

    swal("Registro Terrorífico!","El registro ha sido exitoso", "success",{ button:"aceptar",});

    vm.nuevoLugar = null;
    listarLugares();

  }
  
  function  listarLugares(){
  vm.listaLugares = servicioLugares.obtenerLugares()
};

/*------------------------------------Fin Lugares----------------------------------*/


  }
})();