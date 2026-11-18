import { describe, it, expect } from "vitest";
import { data } from "./Hero";

describe("app/data/Hero", () => {
  it("exports hero content and quick links", () => {
    expect(data).toBeDefined();
    expect(typeof data.title).toBe("string");
    expect(typeof data.description).toBe("string");
    expect(typeof data.backgroundImageUrl).toBe("string");
  });
});
