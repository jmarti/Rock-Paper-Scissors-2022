import { expect, describe, it } from "vitest"
import { RockPaperScissorGame } from "../src/kata"

describe("Rock paper scissors game", () => {

  it("constructor does not throw", () => {
    expect(() => new RockPaperScissorGame("", "")).not.toThrowError()
  })

  it("can initialize a game", () => {
    const game = new RockPaperScissorGame("", "")
    expect(game).toBeInstanceOf(RockPaperScissorGame)
  })

  const testCases = [
    { player: "rock", opponent: "scissors", expectedWinner: "rock" },
    { player: "scissors", opponent: "rock", expectedWinner: "rock" },
    { player: "paper", opponent: "rock", expectedWinner: "paper" },
    { player: "rock", opponent: "paper", expectedWinner: "paper" },
  ]

  testCases.forEach(({ player, opponent, expectedWinner }) => {
    it(`if player shows ${player} and opponent shows ${opponent}, winner will be ${expectedWinner}`, () => {
      const game = new RockPaperScissorGame(player, opponent)
      expect(game.winner()).toBe(expectedWinner)
    })
  })
})
