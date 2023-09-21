import { expect, describe, it } from "vitest";
import { renameMe } from "../src/kata.ts";

describe("Kata", () => {
  it("change_this_name", () => {
    const result = renameMe();
    expect(result).toBe(true);
  });
});
