/**
 * Created by Victor Hugo on 29/06/2017.
 */

angular.module('starter.login', ['ionic'])

  .controller('loginController',function ($state, $scope) {

    $scope.goMaps = function () {
      $state.go('tabs.mapa')
    };

    $scope.goRegistro = function () {
      $state.go('registro')
    }

  });
