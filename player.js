class Player{
    constructor(){}
     getPC(){
        var pcrefer = database.ref('playerCount')
        pcrefer.on("value", function (data){
            playerCount = data.val();
        })
     }
     updatePC(count){
         var updatepcref = database.ref('/')
         updatepcref.update({
             playerCount :  count
         })
     }
     updateName(name){
         var playerindex = "player" + playerCount
         var pindexref = database.ref(playerindex)
         pindexref.set({
            name : name 
         })
     }
}