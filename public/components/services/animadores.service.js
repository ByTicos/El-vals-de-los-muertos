(() => {
  'use strict';
  angular
  .module('funeraria')
  .service('servicioAnimadores', servicioAnimadores);

  servicioAnimadores.$inject = ['$log', '$http'];

  function servicioAnimadores ($log, $http){

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
      agregarAnimador: _agregarAnimador,
      obtenerAnimador: _obtenerAnimador
    };
    return publicAPI;

    function _agregarAnimador(pnuevoAnimador) {
        let listaAnimador = _obtenerAnimador();
        let respuesta = true;
        listaAnimador.push(pnuevoAnimador);

        asyncLocalStorage.setItem('animadorLS', listaAnimador).then((response) =>{
          respuesta = response;
        });
        return respuesta;
    }

    function _obtenerAnimador() {
      let listaAnimador = [];
      let listaAnimadorLocal = JSON.parse(localStorage.getItem("animadorLS"));

      if(listaAnimadorLocal == null){
        listaAnimador = [];
      }else {
        listaAnimadorLocal.forEach(obj => {

          let objAnimadores = new Animadores(obj.id, obj.apodo, obj.costo);

          listaAnimador.push(objAnimadores);
        });
      }
      return objAnimadores;
    }
  }
})();
