import { describe, it, expect } from "vitest";
import { data } from "./Events";

describe("app/data/Events", () => {
  it("exports events with required fields", () => {
    expect(data).toBeDefined();
    expect(typeof data.title).toBe("string");
    expect(Array.isArray(data.events)).toBe(true);
    data.events.forEach((event) => {
      expect(typeof event.title).toBe("string");
      expect(typeof event.type).toBe("string");
      expect(typeof event.date).toBe("string");
      expect(typeof event.description).toBe("string");
      expect(typeof event.link).toBe("string");
    });
  });
});
