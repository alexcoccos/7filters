angular.module('app').filter('filterLingua',function(){

  return function(lista,lingua){
    if(lingua == "Tutte"){
      return lista;
    }else{
      return lista.filter(function(el){
        return el.lingua == lingua
      })
    }
  }

})
