import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import uiBootstrap from 'angular-bootstrap-npm';
import HomeController from './controllers/homeController';
import AboutController from './controllers/aboutController';
import ContactController from './controllers/contactController';

    let app = angular.module('animeClub', [uirouter, ngResource, uiBootstrap]);
    app.config(routing);

    routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function routing($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: HomeController,
            controllerAs: 'controller'
          })
          .state('about', {
            url: '/about',
            templateUrl: '/ngApp/views/about.html',
            controller: AboutController,
            controllerAs: 'controller'
          })
          .state('contact', {
            url: '/contact',
            templateUrl: '/ngApp/views/contact.html',
            controller: ContactController,
            controllerAs: 'controller'
          })
          .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
          });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    }
