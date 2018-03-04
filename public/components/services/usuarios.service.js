(() => {
  'use strict';
  angular
  .module('funeraria')
  .service('servicioUsuarios', servicioUsuarios);

  servicioUsuarios.$inject = ['$log','$http'];

  function servicioUsuarios($log, $http){

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
      addUsuario : _addUsuario,
      getUsuarios : _getUsuarios,
      addMuerto : _addMuerto,
      getMuerto : _getMuerto,
      getAllMuertos: _getAllMuertos
    }
    return publicAPI;

    // Funcion que almacena en el localStorage todos los usuarios
    function _addUsuario(pnuevoUsuario){
      let listaUsuarios = _getUsuarios();
      let respuesta = true;
      listaUsuarios.push(pnuevoUsuario);

      asyncLocalStorage.setItem('usuariosLS', listaUsuarios).then((response) =>{
        respuesta = response;
      });

      return respuesta;
    }

    // Funcion que trae todos los usuarios del localStorage y a partir de esos datos vuelve a crear un arreglo con todos los objetos de tipo usuario
    function _getUsuarios(){
      let listaUsuarios = [];
      let listaUsuariosLocal = JSON.parse(localStorage.getItem("usuariosLS"));

      if(listaUsuariosLocal == null){
        listaUsuarios = [];
      }else{
        listaUsuariosLocal.forEach(obj => {

          let objUsuarios = new Cliente(obj.foto, obj.nombre, obj.apellido, obj.cedula, obj.provincia, obj.canton, obj.distrito, obj.ubicacion, obj.fechaNacimiento, obj.edad, obj.genero, obj.nombreUsuario, obj.contrasenna);

          obj.listaMuertos.forEach(objMuertos =>{
            let objMuertoTemporal = new Muerto (objMuertos.apodo, objMuertos.edad, objMuertos.genero, objMuertos.tamanno );

            objUsuarios.registrarMuerto(objMuertoTemporal);

          })
          listaUsuarios.push(objUsuarios);
        });
      }

      return listaUsuarios;
    }
     function _addMuerto (pnuevoMuerto) {
      let listaUsuarios = _getUsuarios();
      let sesion = JSON.parse(sessionStorage.getItem('sesion'));

      for(let i = 0; i < listaUsuarios.length; i++){
        if (sesion.cedula == listaUsuarios[i].obtenerCedula()){
          listaUsuarios[i].registrarMuerto(pnuevoMuerto);
        }
      }

      actualizarLocal(listaUsuarios);
  
};

function _getMuerto () {
 let listaUsuarios = _getUsuarios();
      let listaMuertos = [];
      let sesion = JSON.parse(sessionStorage.getItem('sesion'));
      for( let i=0; i<listaUsuarios.length;i++){
        if(sesion.cedula == listaUsuarios[i].obtenerCedula()){
          if(listaUsuarios[i].obtenerMuertos() != null){
            listaMuertos = listaUsuarios[i].obtenerMuertos();
          }
        }
      }
      return listaMuertos;
}

function _getAllMuertos(){
  let listaUsuarios = _getUsuarios();
  let listaMuertos = [];
  for (let i = 0; i < listaUsuarios.length; i++){
    let listaMuertosTemp = listaUsuarios[i].obtenerMuertos();
    if(listaMuertosTemp != []){
      let muertoTemp = {};
      for(let j = 0; j < listaMuertosTemp.length; j++){
        muertoTemp = listaMuertosTemp[j];
        listaMuertos.push(muertoTemp);
      }
    }
  }
  return listaMuertos;
}
 function actualizarLocal(plistaActualizada) {
     localStorage.setItem('usuariosLS', JSON.stringify(plistaActualizada));
   }
  }
})();
