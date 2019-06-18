const { repair } = require("./enhancer.js");
// test away!

describe("enhancer.js", () => {
  describe("repair()", () => {
    it("restores durability to 100", () => {
      expect(repair({ durability: 100 }).durability).toBe(100);
    });
    it("restores durability to 100", () => {
      expect(repair({ durability: 50 }).durability).toBe(100);
    });
    it("restores durability to 100", () => {
      expect(repair({ durability: 320 }).durability).toBe(100);
    });
  });
});
