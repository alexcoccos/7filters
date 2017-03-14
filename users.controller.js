angular.module('app').controller('UsersCtrl', function ($scope,$interval,ItemSrv) {

    $scope.titolo = "lista utenti";

    $interval(function(){
      $scope.data = new Date();
    },1000);
    //ci sono funzioni che ci possono dare gli intervalli di tempo
    $scope.utenti = ItemSrv.getUser();


});
