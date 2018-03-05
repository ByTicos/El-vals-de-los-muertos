(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorRegistroLugares', controladorRegistroLugares); 


controladorRegistroLugares.$inject = ['$stateParams','$state','servicioLugares','servicioUsuarios']; 

 function controladorRegistroLugares($stateParams,$state,servicioLugares, servicioUsuarios){ 
 let vm = this; 
      
 vm.nuevoLugar = {}; 
       
      
 vm.listaLugares = servicioLugares.obtenerLugares();      
       
   
 vm.agregarNuevoLugar = (pnuevoLugar) => {     
        
 console.log(pnuevoLugar);      
         
 let objNuevoLugar = new Lugares(pnuevoLugar.id, pnuevoLugar.lugar);  
 
console.log('objeto con nuevo lugar');    
    
 console.log(objNuevoLugar);     
         
 servicioLugares.agregarLugares(objNuevoLugar);    
          
      
    swal("Excelente","Lugar registrado", "success",{ button:"aceptar",});    
      
  vm.nuevoLugar = null;        
 }     

/*function listarLugares() {     
 vm.listaLugares = servicioLugares.obtenerLugares();    }*/

  }
})(); 


