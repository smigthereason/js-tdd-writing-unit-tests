// Your tests here
import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    // TODO: write test code
    const word = "test";
    const points = pointsForWord(word);

    expect(points).toBe(7);
  });
});