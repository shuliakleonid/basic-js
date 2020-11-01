const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
    if(!Array.isArray(members)){
        return false
    } ;
       let dreamTeam = members.map(function(i){
          if (typeof i == 'string') {
              return i.trim().toUpperCase()[0]
          }
      }
      )
      .sort().join("");
      return dreamTeam;
}
