export class RockPaperScissorGame {
  winner() {
    if (this.player === "paper") return this.player;
    if (this.opponent === "paper") return this.opponent;

    if (this.opponent == "rock") return this.opponent;

    return this.player;
  }
  constructor(private player: String, private opponent: String) {}
}
