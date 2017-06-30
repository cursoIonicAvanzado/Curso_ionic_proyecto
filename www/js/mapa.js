/**
 * Created by Victor Hugo on 29/06/2017.
 */

angular.module('starter.mapa', ['ionic'])

  .controller('mapaController', function ($scope, $state, $ionicPopup, $ionicPlatform, $cordovaGeolocation) {

    $scope.goLogin = function () {

      var confirmPopup = $ionicPopup.confirm({
        title: 'Cerrar Sesión',
        template: 'Estas seguro de cerrar sesión?'
      });

      confirmPopup.then(function (res) {
        if (res) {
          $state.go('login')
        } else {
          console.log('Aun seguimos aqui');
        }
      })

    };

    $scope.goPerfil = function () {
      $state.go('perfil')
    };

    var plazaBicentenario = {
      lat: 22.769448,
      lng: -102.5719039
    };

    function initMap() {
      var mapDiv = document.getElementById('map');

      var mapOptions = {
        center: plazaBicentenario,
        zoom: 15,
        mapTypeControl: false,
        streetViewControl: false
      }

      $scope.map = new google.maps.Map(mapDiv, mapOptions);
    };

    function getPosition() {

      var watchOptions = {
        timeout: 500,
        enableHighAccuracy: false // may cause errors if true
      };

      var watch = $cordovaGeolocation.watchPosition(watchOptions);
      watch.then(
        null,
        function (err) {
          // error
        },
        function (position) {
          $scope.latitud = position.coords.latitude;
          $scope.longitud = position.coords.longitude;

        });

    };

    function myPosition(){
      var miPosicion = new google.maps.Marker({
        map: $scope.map,
        position : {lat: $scope.latitud, lng: $scope.longitud},
        animation: google.maps.Animation.DROP,
        draggable: true
      })


    }

    $ionicPlatform.ready(function () {

      setTimeout(function () {
        if (document.readyState === "complete") {
          initMap();
          getPosition();
        } else {
          google.map.event.addDomListener(window, 'load', initMap)
        }
      }, 500)

    });

  });
