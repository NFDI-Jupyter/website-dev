import { describe, it, expect } from "vitest";
import { data } from "./Hero";

describe("app/data/Hero", () => {
  it("exports hero content and quick links", () => {
    expect(data).toBeDefined();
    expect(typeof data.title).toBe("string");
    expect(typeof data.description).toBe("string");
    expect(typeof data.backgroundImageUrl).toBe("string");
    expect(typeof data.quick.title).toBe("string");
    expect(Array.isArray(data.quick.links)).toBe(true);
    data.quick.links.forEach((l) => {
      expect(typeof l.label).toBe("string");
      expect(typeof l.id).toBe("string");
    });
  });
});
