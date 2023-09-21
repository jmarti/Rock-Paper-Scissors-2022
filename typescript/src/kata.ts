export class RockPaperScissorGame {
  winner() {
    if (this.player === "paper" && this.opponent === "rock") return this.player;

    if (this.opponent == "rock") return this.opponent;

    return this.player;
  }
  constructor(private player: String, private opponent: String) {}
}
