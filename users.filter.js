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

});
angular.module('app').filter('filterSex',function(){

  return function(lista,sesso){
    if(sesso == "Entrambi"){
      return lista;
    }else{
      return lista.filter(function(el){
        return el.sesso == sesso
      })
    }
  }

});
