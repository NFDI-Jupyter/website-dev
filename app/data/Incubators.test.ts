import { describe, it, expect } from "vitest";
import { data } from "./Incubators";

describe("app/data/Incubators", () => {
  it("exports incubators array with expected fields", () => {
    expect(data).toBeDefined();
    expect(typeof data.title).toBe("string");
    expect(Array.isArray(data.incubators)).toBe(true);
    data.incubators.forEach((i) => {
      expect(typeof i.name).toBe("string");
      expect(typeof i.description).toBe("string");
      expect(typeof i.url).toBe("string");
      expect(typeof i.image.src).toBe("string");
      expect(typeof i.image.alt).toBe("string");
    });
  });
});
