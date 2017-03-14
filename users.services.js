//SCRIVERE UL SERVICE CON UN METODO CHE RITORNA LA LISTA UTENTI
angular.module('app').service('ItemSrv',function(){

  var utenti = [
  {
      "nome": "Samuel",
      "cognome": "Chapman",
      "sesso": "Maschio",
      "lingua": "Italiano"
  }, {
      "nome": "Fred",
      "cognome": "Martin",
      "sesso": "Maschio",
      "lingua": "Francese"
  }, {
      "nome": "James",
      "cognome": "Watkins",
      "sesso": "Maschio",
      "lingua": "Inglese"
  }, {
      "nome": "Mildred",
      "cognome": "Mills",
      "sesso": "Femmina",
      "lingua": "Italiano"
  }, {
      "nome": "Jack",
      "cognome": "Garcia",
      "sesso": "Maschio",
      "lingua": "Inglese"
  }, {
      "nome": "Nicole",
      "cognome": "Lee",
      "sesso": "Femmina",
      "lingua": "Italiano"
  }, {
      "nome": "Donna",
      "cognome": "Jones",
      "sesso": "Femmina",
      "lingua": "Italiano"
  }, {
      "nome": "Marilyn",
      "cognome": "Richards",
      "sesso": "Femmina",
      "lingua": "Inglese"
  }, {
      "nome": "Sandra",
      "cognome": "Jackson",
      "sesso": "Femmina",
      "lingua": "Francese"
  }, {
      "nome": "Chris",
      "cognome": "Fowler",
      "sesso": "Maschio",
      "lingua": "Italiano"
  }, {
      "nome": "Sara",
      "cognome": "Reid",
      "sesso": "Femmina",
      "lingua": "Inglese"
  }, {
      "nome": "Phyllis",
      "cognome": "Smith",
      "sesso": "Femmina",
      "lingua": "Italiano"
  }, {
      "nome": "Samuel",
      "cognome": "Holmes",
      "sesso": "Maschio",
      "lingua": "Inglese"
  }, {
      "nome": "Lawrence",
      "cognome": "Lewis",
      "sesso": "Maschio",
      "lingua": "Italiano"
  }, {
      "nome": "Lori",
      "cognome": "Simpson",
      "sesso": "Femmina",
      "lingua": "Inglese"
  }, {
      "nome": "Gloria",
      "cognome": "Snyder",
      "sesso": "Femmina",
      "lingua": "Francese"
  }, {
      "nome": "Andrea",
      "cognome": "Sanders",
      "sesso": "Femmina",
      "lingua": "Italiano"
  }, {
      "nome": "Julia",
      "cognome": "Brown",
      "sesso": "Femmina",
      "lingua": "Francese"
  }, {
      "nome": "Shawn",
      "cognome": "Fox",
      "sesso": "Maschio",
      "lingua": "Italiano"
  }, {
      "nome": "Nicole",
      "cognome": "Henderson",
      "sesso": "Femmina",
      "lingua": "Italiano"
  }
];

  var getUser = function(){
    return utenti;
  }


  return {
    getUser: getUser
  }

});
