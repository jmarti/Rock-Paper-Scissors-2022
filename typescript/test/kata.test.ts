import { expect, describe, it } from "vitest";
import { RockPaperScissorGame } from "../src/kata";

describe("Rock paper scissors game", () => {
  it("can initialize a game", () => {
    const game = new RockPaperScissorGame()
    
    expect(game).toBeInstanceOf(RockPaperScissorGame);
  });
});
