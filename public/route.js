(() => {
  'use strict';
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);
  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {

    $stateProvider
      .state('landingPage', {
        url: '/',
        templateUrl: './components/landingPage/landingPage.view.html',
        data:{
          pageTitle: 'Arquitectura'
        }
      })

      .state('usuarios', {
        url: '/users',
        templateUrl: './components/usuarios/usuarios.view.html',
        data:{
          pageTitle: 'Registro usuarios'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/usuarios.controller.js')
          }]
        },
        controller: 'controladorUsuarios',
        controllerAs: 'vm'
      })

      .state('logIn', {
        url: '/logIn',
        templateUrl: './components/logIn/logIn.view.html',
        data:{
          pageTitle: 'Iniciar sesión'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/logIn/logIn.controller.js')
          }]
        },
        controller: 'controladorLogin',
        controllerAs: 'vm'
      })

//registro de muertos
      .state('registrarMuertos', {
        url: '/muertos',
        templateUrl: './components/muertos/registroMuertos.view.html',
        data:{
          pageTitle: 'Registro de muertos'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/muertos/registroMuerto.controller.js')
          }]
        },
        controller: 'controladorRegistroMuerto',
        controllerAs: 'vm'
      })

      .state('registroLugares', {
        url: '/registroLugares',
        templateUrl: './components/lugares/registroLugares.view.html',
        data: {
          pageTitle: 'Registro de Lugares'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/lugares/registroLugares.controller.js')
          }]
        },
        controller: 'controladorRegistroLugares',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  };
})();
