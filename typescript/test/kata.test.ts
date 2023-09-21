import { expect, describe, it } from "vitest";
import { RockPaperScissorGame } from "../src/kata";

describe("Rock paper scissors game", () => {
  it("constructor does not throw", () => {
    expect(() => new RockPaperScissorGame("", "")).not.toThrowError();
  });

  it("can initialize a game", () => {
    const game = new RockPaperScissorGame("", "");
    expect(game).toBeInstanceOf(RockPaperScissorGame);
  });

  describe("I want the rock to beat scissors", () => {
    it("Then I should win", () => {
      const player = "rock";
      const opponent = "scissors";
      const game = new RockPaperScissorGame(player, opponent);
      expect(game.winner()).toBe(player);
    });

    it("Then the opponent win", () => {
      const player = "scissors";
      const opponent = "rock";
      const game = new RockPaperScissorGame(player, opponent);
      expect(game.winner()).toBe(opponent);
    });
  });

  it("I want the paper to beat rock", () => {
    const player = "paper";
    const opponent = "rock";
    const game = new RockPaperScissorGame(player, opponent);
    expect(game.winner()).toBe(player);
  });

  it("Given I have chosen rock. When the opponent chooses paper. Then the opponent should win", () => {
    const player = 'rock'
    const opponent = 'paper'
    const game = new RockPaperScissorGame(player, opponent)
    expect(game.winner()).toBe(opponent)
  })

});
