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
      getAllMuertos: _getAllMuertos,
      addFiesta: _addFiesta,
      getFiesta: _getFiesta,
      eliminarUsuario: _eliminarUsuario
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

          objUsuarios.cambiarEstado(obj.estado);
          

          obj.listaMuertos.forEach(objMuertos =>{
            let objMuertoTemp = new Muerto (objMuertos.apodo, objMuertos.edad, objMuertos.genero, objMuertos.tamanno );

            objUsuarios.registrarMuerto(objMuertoTemp);

          

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
function _eliminarUsuario(pCedula){
    let listaUsuarios = _getUsuarios();
    for (let i = 0; i < listaUsuarios.length; i++){
      if (listaUsuarios[i].cedula == pCedula) {
        listaUsuarios[i].cambiarEstado('inactivo');
        console.log(listaUsuarios[i].estado);
        console.log(listaUsuarios);
      }  
    }
    localStorage.setItem('usuariosLS', JSON.stringify(listaUsuarios));
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



  function _addFiesta(pMuerto, pFiesta){
    let listaUsuarios = _getUsuarios();
    let listaVehiculos = [];

    // Ciclo que recorre todos los usuarios
    for(let i = 0; i < listaUsuarios.length; i++){
      
      // Ciclo que recorre todos los vehiculos por usuario
      for(let j=0 ;j < listaUsuarios[i].obtenerMuertos().length; j++){

        // Si la matricula del vehiculo coincide
        if(listaUsuarios[i].obtenerMuertos()[j].obtenerInfoMuerto() == pMuerto.obtenerInfoMuerto()){

          // Le registra la reparación
          listaUsuarios[i].obtenerMuertos()[j].registrarFiesta(pFiesta);
        }
      }
    }
    actualizarLocal(listaUsuarios);
  }

  // Funcion que obtiene todas las reparaciones de los vehiculos
  function _getFiesta(objMuerto){
    let listaUsuarios = _getUsuarios();
    let fiestaMuertos = [];

    for(let i = 0; i < listaUsuarios.length; i++){
      for(let j=0 ;j < listaUsuarios[i].obtenerMuertos().length; j++){

        if (objMuerto.obtenerInfoMuerto() == listaUsuarios[i].obtenerMuertos()[j].obtenerInfoMuerto()){
          fiestaMuertos = listaUsuarios[i].obtenerMuertos()[j].getFiesta();
        }
      }
    }
    return fiestaMuertos;
  }

  function actualizarLocal(plistaActualizada){
    localStorage.setItem('usuariosLS', JSON.stringify(plistaActualizada));
  }


  }
})();
