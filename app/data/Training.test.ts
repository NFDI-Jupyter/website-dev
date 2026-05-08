import { describe, it, expect } from "vitest";
import { data } from "./Training";

describe("app/data/Training", () => {
  it("exports events with required fields", () => {
    expect(data).toBeDefined();
    expect(typeof data.title).toBe("string");
    expect(Array.isArray(data.events)).toBe(true);
    data.events.forEach((e) => {
      expect(typeof e.title).toBe("string");
      expect(typeof e.type).toBe("string");
      expect(typeof e.duration).toBe("string");
      expect(typeof e.level).toBe("string");
      expect(typeof e.date).toBe("string");
      expect(typeof e.description).toBe("string");
    });
  });
});
