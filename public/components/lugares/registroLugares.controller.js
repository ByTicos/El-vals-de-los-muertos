(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorRegistroLugares', controladorRegistroLugares);

  controladorRegistroLugares.$inject = ['servicioLugares']

  function controladorRegistroLugares(servicioLugares){
    let vm = this;

    vm.nuevoLugar = {};
    
    vm.agregarNuevoLugar = (pnuevoLugar) => {
      console.log(pnuevoLugar);
    }
  }
})();
