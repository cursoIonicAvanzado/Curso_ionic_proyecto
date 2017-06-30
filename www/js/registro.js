/**
 * Created by Victor Hugo on 29/06/2017.
 */

angular.module('starter.registro', ['ionic'])

.controller('registroController',function ($scope, $timeout) {

  $scope.listaUno ={
    opcion:""
  };
  $scope.listaDos ={
    opcion:""
  };

  $scope.usuario = {
    nombre:"Victor Hugo",
    apPaterno:"Reveles",
    apMaterno:"Esptia",
    correo:"vic@gmail.com",
    password:"holaMundo",
    numero:"9451525",
    edad:15,
    estado:"",
    Municipio:""
  }

  $scope.estados =[
    {nombre:"Aguascalientes", id:1},
    {nombre:"Baja California", id:2},
    {nombre:"Baja California Sur", id:3},
    {nombre:"Campeche", id:4},
    {nombre:"Chihuahua", id:5},
    {nombre:"Chiapas", id:6}

  ];


  var municipios = [
    {nombre:"Aguascalientes", id_e: 1, id:1},
    {nombre:"Asientos", id_e: 1, id:2},
    {nombre:"Calvillo", id_e: 1, id:3},
    {nombre:"Cosio", id_e: 1, id:4},
    {nombre:"El LLano", id_e: 1, id:5},
    {nombre:"Ensenada", id_e: 2, id:6},
    {nombre:"Mexicali", id_e: 2, id:7},
    {nombre:"Playas del Rosarito", id_e: 2, id:8},
    {nombre:"Tecate", id_e: 2, id:9},
    {nombre:"Tijuana", id_e: 2, id:10},
    {nombre:"Comondú", id_e: 3, id:11},
    {nombre:"La Paz", id_e: 3, id:12},
    {nombre:"Loreto", id_e: 3, id:13},
    {nombre:"Los Cabos", id_e: 3, id:14},
    {nombre:"Mulegé", id_e: 3, id:15},
    {nombre:"Comondú", id_e: 4, id:16},
    {nombre:"La Paz", id_e: 4, id:17},
    {nombre:"Loreto", id_e: 4, id:18},
    {nombre:"Los Cabos", id_e: 4, id:19},
    {nombre:"Mulegé", id_e: 4, id:20},
  ]


  $scope.selectEstado = function () {
    var estado = $scope.listaUno.opcion;

    $scope.municipiosEstados = [];

    for(var i =0; i<municipios.length; i++){
        if(municipios[i].id_e == estado.id){
          $scope.municipiosEstados.push(municipios[i])
        }
    }

  };


  $scope.selectMunicipio = function () {
    var municipio = $scope.listaDos.opcion;

  };


});
