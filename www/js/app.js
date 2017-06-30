// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova', 'starter.mapa', 'starter.registro', 'starter.login', 'starter.perfil'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        $ionicConfigProvider.tabs.position("bottom");
        $stateProvider

            .state('login', {
                cache: false,
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'loginController'
            })

            .state('registro', {
                cache: false,
                url: '/registro',
                templateUrl: 'templates/registro.html',
                controller: 'registroController'
            })

            .state('perfil', {
              cache: false,
              url: '/perfil',
              templateUrl: 'templates/perfil.html',
              controller: 'perfilController'
            })

            .state('tabs', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            .state('tabs.mapa', {
                url: '/mapa',
                views: {
                    'mapa': {
                        templateUrl: 'templates/mapa.html',
                        controller: 'mapaController'
                    }
                }
            })

            .state('tabs.places', {
                url: "/places",
                views: {
                    'places': {
                        templateUrl: 'templates/places.html'
                    }
                }
            });

        $urlRouterProvider.otherwise('/login')


    })

    .service('serviceHttpRequest', function () {
        this.createPostHttpRequest = function (url, data) {
            var httpRequest = {
                method: 'POST',
                url: url,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "="
                            + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: data,
                timeout: 3000
            };

            return httpRequest;
        };

        this.createPutHttpRequest = function (url, data) {

            var httpRequest = {
                method: 'PUT',
                url: url,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "="
                            + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: data,
                timeout: 3000
            };

            return httpRequest;
        };

        this.createDelHttpRequest = function (url, data) {
            var httpRequest = {
                method: 'DELETE',
                url: url,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "="
                            + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: data,
                timeout: 3000
            };

            return httpRequest;
        }
    })

    .service('utils', function ($ionicPopup, $ionicLoading) {

        this.popup = function(title, template) {
            var alertPopup = $ionicPopup.alert({
                title: title,
                template: template
            });
        };

        this.showLoading = function() {
            $ionicLoading.show({
                template: '<ion-spinner></ion-spinner>' +
                '<p>Cargando</p>',
                animation: 'fade-in'
            }).then(function () {
                // console.log("The loading indicator is now displayed");
            });
        };

        this.hideLoading = function () {
            $ionicLoading.hide();
        }
    });
