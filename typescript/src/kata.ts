export class RockPaperScissorGame {
   
  winner() {
    if (this.opponent == "rock")
      return this.opponent
    return this.player
  }
  constructor(private player: String, private opponent: String) {
    
  }
};