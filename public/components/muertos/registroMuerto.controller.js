(() => {
  'use strict';
  angular
    .module ('funeraria')
    .controller ('controladorRegistroMuerto', controladorRegistroMuerto);

  controladorRegistroMuerto.$inject = [
    '$stateParams',
    '$state',
    'servicioUsuarios',
  ];

  function controladorRegistroMuerto ($stateParams, $state, servicioUsuarios) {
    let vm = this;
    vm.nuevoMuerto = {};

    listarMuertos ();

    vm.agregarnuevoMuerto = pnuevoMuerto => {
      let objNuevoMuerto = new Muerto (
        pnuevoMuerto.apodo,
        pnuevoMuerto.edad,
        pnuevoMuerto.genero,
        pnuevoMuerto.tamanno
      );

      servicioUsuarios.addMuerto (objNuevoMuerto);

      swal (
        'Registro exitoso',
        'Se ha registrado correctamente el difunto',
        'success',
        {
          button: 'Aceptar',
        }
      );
      listarMuertos ();

      vm.nuevoMuerto = null;
    };

    vm.editarMuertos = (
      pApodoMuerto,
      pEdadMuerto,
      pGeneroMuerto,
      pTamannoMuerto
    ) => {
      document.querySelector ('#apodo').value = pApodoMuerto;
      document.querySelector ('#edad').value = pEdadMuerto;
      document.querySelector ('#genero').value = pGeneroMuerto;
      document.querySelector ('#tamanno').value = pTamannoMuerto;
      document.querySelector ('#btnRegistrar').classList.add ('ocultar');
    };

    function actualizar () {
      document.querySelector ('#btnRegistrar').classList.remove ('ocultar');
      document.querySelector ('#btnActualizar').classList.add ('ocultar');

      let sApodo = document.querySelector ('#apodo').value;
      let sEdad = document.querySelector ('#edad').value;
      let sGenero = document.querySelector ('#genero').value;
      let sTamanno = document.querySelector ('#tamanno').value;
      let listaMuertosModificada = [];

      listaMuertosModificada.push (sApodo, sEdad, sGenero, sTamanno);
      actualizarMuerto (listaMuertosModificada);

      listarMuertos ();
    }

    function listarMuertos () {
      vm.listaMuertos = servicioUsuarios.getMuerto ();
    }
  }
<<<<<<< HEAD
}) ();
=======

    
})(); 
>>>>>>> Esteban
