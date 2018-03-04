(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorRegistroMuerto', controladorRegistroMuerto);

  controladorRegistroMuerto.$inject = ['servicioUsuarios'];

<<<<<<< HEAD
  function controladorRegistroMuerto($stateParams, $state, servicioUsuarios) {

    let vm = this;
    vm.nuevoMuerto = {};
    

=======
  function controladorRegistroMuerto(servicioUsuarios) {
    let vm = this;
    vm.nuevoMuerto = {};
    vm.listaMuertos=listarMuertos();
>>>>>>> Esteban
    listarMuertos();

   

    vm.agregarnuevoMuerto = (pnuevoMuerto) =>{
<<<<<<< HEAD
     let objNuevoMuerto = new Muerto (pnuevoMuerto.apodo, pnuevoMuerto.edad, pnuevoMuerto.genero, pnuevoMuerto.tamanno);
=======
     console.log(pnuevoMuerto);
>>>>>>> Esteban

     let objNuevoMuerto = new Muerto(pnuevoMuerto.apodo, pnuevoMuerto.edad, pnuevoMuerto.genero, pnuevoMuerto.tamanno);

     console.log('objeto con nuevo muerto');
     console.log(objNuevoMuerto);

     servicioUsuarios.agregarMuerto(objNuevoMuerto);

     swal("en todas","ahi vamos", "success",{ button:"aceptar",});

     vm.nuevoMuerto = null;
    
    listarMuertos();
    }
    
     
    

    vm.editarMuertos=(pApodoMuerto,pEdadMuerto,pGeneroMuerto,pTamannoMuerto)=>{
      document.querySelector('#apodo').value=pApodoMuerto;
      document.querySelector ('#edad').value = pEdadMuerto;
      document.querySelector('#genero').value=pGeneroMuerto;
      document.querySelector('#tamanno').value=pTamannoMuerto;
      document.querySelector('#btnRegistrar').classList.add('ocultar');
    }

    function actualizar(){
      document.querySelector ('#btnRegistrar').classList.remove ('ocultar');
      document.querySelector ('#btnActualizar').classList.add ('ocultar');
      
      let sApodo = document.querySelector('#apodo').value;
      let sEdad = document.querySelector ('#edad').value; 
      let sGenero = document.querySelector('#genero').value;
      let sTamanno = document.querySelector('#tamanno').value;
      let listaMuertosModificada=[];
      

      listaMuertosModificada.push(sApodo,sEdad,sGenero,sTamanno);
      actualizarMuerto(listaMuertosModificada);

      listarMuertos();
    }
  

     function listarMuertos() {
<<<<<<< HEAD
      vm.listaMuertos = servicioUsuarios.getMuerto();
=======
      vm.listaMuertos = servicioUsuarios.obtenerMuerto();
>>>>>>> Esteban
    }
  }
})(); 