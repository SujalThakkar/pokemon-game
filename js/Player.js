class Player {
  constructor(){
    this.pokemon = null; 
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      pokemon : this.pokemon
    })
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getCarsEnd(){
    database.ref('carsEnd').on("value" , (data)=>{
      this.rank = data.val();
    })
  }

  static updateCarsEnd(rank){
     database.ref('/').update({carsEnd : rank})    
  }  
}
