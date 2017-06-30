/**
 * Created by Victor Hugo on 29/06/2017.
 */

angular.module('starter.login', ['ionic'])
    .controller('loginController', function ($state, $scope, utils, $http,
                                             serviceHttpRequest, $q) {
        $scope.loginData = {
            correo: 'porfirioads@gmail.com',
            password: 'holamundo'
        };

        $scope.goMaps = function () {
            $state.go('tabs.mapa')
        };

        $scope.goRegistro = function () {
            $state.go('registro')
        };

        $scope.login = function () {
            utils.showLoading();

            sendLoginRequest()
                .then(function (data) {
                    utils.popup('info', JSON.stringify(data));
                })
                .catch(function (error) {
                    utils.popup('error', JSON.stringify(error));
                })
                .finally(function () {
                    utils.hideLoading();
                });
        };

        function sendLoginRequest() {
            var defered = $q.defer();
            var promise = defered.promise;

            var httpRequest = serviceHttpRequest.createPostHttpRequest(
                'http://192.168.1.101:8000/login',
                {
                    email: $scope.loginData.correo,
                    password: $scope.loginData.password
                }
            );

            $http(httpRequest)
                .then(function successCallback(response) {
                    setTimeout(function () {
                        defered.resolve(response.data);
                    }, 0);
                }, function errorCallback(response) {
                    setTimeout(function () {
                        defered.reject(response.data)
                    }, 0);
                });

            return promise;
        }
    });
