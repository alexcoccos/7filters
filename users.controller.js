angular.module('app').controller('UsersCtrl', function ($scope,$interval,ItemSrv) {

    $scope.titolo = "lista utenti";
    $scope.lingua = "Tutte";
    $scope.sesso= "Entrambi";

    $interval(function(){
      $scope.data = new Date();
    },1000);
    //ci sono funzioni che ci possono dare gli intervalli di tempo
    $scope.utenti = ItemSrv.getUser();


});
