import { describe, it, expect } from "vitest";
import { data } from "./Mission";

describe("app/data/Mission", () => {
  it("exports mission content with paragraphs and stats", () => {
    expect(data).toBeDefined();
    expect(typeof data.title).toBe("string");
    expect(typeof data.dominantText).toBe("string");
    expect(typeof data.dominantTextHightlight).toBe("string");
    expect(Array.isArray(data.paragraphs)).toBe(true);
    expect(Array.isArray(data.stats)).toBe(true);
    data.stats.forEach((s) => {
      expect(typeof s.label).toBe("string");
      expect(typeof s.value).toBe("string");
    });
  });
});
