/**
 * Created by Victor Hugo on 30/06/2017.
 */

angular.module('starter.perfil', ['ionic'])

.controller('perfilController', function ($scope, $state) {

  $scope.goPlaces = function () {
      $state.go('tabs.places')
  };

});
