// TODO Dentro de este archivo se crean los objetos con sus respectivos métodos


class Muerto{
  constructor(pEdad, pGenero, pApodo, pTamanno){
    this.edad = pEdad ;
    this.genero = pGenero;
    this.apodo = pApodo;
    this.tamanno = pTamanno;
    this.entierro= '';
    this.listaRetoques=[];
    this.fiesta = [];
  }
  registrarEntierros(pEntierro){
    this.entierro=pEntierro;
  }

   registrarRetoques(pRetoques){
    this.listaRetoques.push(pRetoques);
  }

  registrarFiesta(pFiesta){
    this.fiesta=pFiesta;
  }
}

class Entierro {
  constructor (pFecha, pHoraInicio, pHoraFin, pPrioridad) {
    this.fecha = pFecha;
    this.horaInicio = pHoraInicio;
    this.horaFin = pHoraFin;
    this.prioridad = pPrioridad;
    this.lugar = '';
  }

  registrarLugar(pLugar){
    this.lugar=pLugar;
  }

}

class Retoques {
  constructor (pTipo,pNombre,pCosto) {
    this.tipo = pTipo;
    this.nombre=pNombre;
    this.costo=pCosto;
  }
}

class Fiestas {
  constructor (pFecha, pDuracion, pAnimador, pCosto) {
    this.fecha = pFecha;
    this.duracion = pDuracion;
    this.animador = pAnimador;
    this.costo = pCosto;
    this.animador = '';
  }
  registrarAnimador(pAnimador){
    this.animador=pAnimador;
  }
}

class Lugares {
  constructor (pId,pLugar) {
    this.id=pId;
    this.lugar = pLugar;
  }
}

class Animadores {
  constructor (pId, pNombre,pApellido, pCosto) {
    this.id = pId;
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.costo = pCosto;
  }
}








