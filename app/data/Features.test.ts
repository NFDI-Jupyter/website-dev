import { describe, it, expect } from "vitest";
import { data } from "./Features";

describe("app/data/Features", () => {
  it("exports features array with correct fields", () => {
    expect(data).toBeDefined();
    expect(typeof data.title).toBe("string");
    expect(Array.isArray(data.features)).toBe(true);
    data.features.forEach((f) => {
      expect(typeof f.title).toBe("string");
      expect(typeof f.oneLiner).toBe("string");
      expect(typeof f.description).toBe("string");
      expect(["function", "object"]).toContain(typeof f.icon);
    });
  });
});
