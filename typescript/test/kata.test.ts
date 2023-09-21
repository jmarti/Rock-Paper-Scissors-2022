import { expect, describe, it } from "vitest";
import { RockPaperScissorGame } from "../src/kata";
describe("Rock paper scissors game", () => {
  it("constructor does not throw", () => {
    expect(()=> new RockPaperScissorGame("","")).not.toThrowError();
  })
  it("can initialize a game", () => {
    const game = new RockPaperScissorGame("","")
    expect(game).toBeInstanceOf(RockPaperScissorGame);
  })
  it("I want the rock to beat scissors", () => {
    const player = 'rock'
    const opponent = 'scissors'
    const game = new RockPaperScissorGame(player, opponent)
    expect(game.winner()).toBe("rock")
  })
});