// TODO Dentro de este archivo se crean los objetos con sus respectivos métodos
class Cliente{
  constructor(pFoto, pNombre, pApellido, pCedula, pProvincia, pCanton, pDistrito, pUbicacion, pFechaNacimiento, pEdad, pGenero, pNombreUsuario, pContrasenna){
    this.foto = pFoto;
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.cedula = pCedula;
    this.provincia = pProvincia;
    this.canton = pCanton;
    this.disttrito = pDistrito;
    this.ubicacion = pUbicacion;
    this.fechaNacimiento = pFechaNacimiento;
    this.edad = pEdad;
    this.genero = pGenero;
    this.nombreUsuario = pNombreUsuario;
    this.contrasenna = pContrasenna;
    this.listaMuertos = [];
  }
  registrarMuerto(pMuerto){
    this.listaMuertos.push(pMuerto);
  }
  obtenerNombreCompleto(){
    return `${this.nombre} ${this.apellido}`;
  }
  obtenerCedula(){
    return this.cedula;
  }
}

class Vehiculo{
  constructor(pPlaca, pMarca, pCapacidad, pAnno){
    this.placa = pPlaca ;
    this.marca = pMarca;
    this.capacidad = pCapacidad;
    this.anno = pAnno;
  }
}