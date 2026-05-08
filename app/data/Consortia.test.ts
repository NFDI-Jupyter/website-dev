import { describe, it, expect } from "vitest";
import { data } from "./Consortia";

describe("app/data/Consortia", () => {
  it("exports consortia array with correct fields", () => {
    expect(data).toBeDefined();
    expect(typeof data.title).toBe("string");
    expect(Array.isArray(data.consortia)).toBe(true);
    data.consortia.forEach((c) => {
      expect(typeof c.name).toBe("string");
      expect(typeof c.domain).toBe("string");
      expect(typeof c.description).toBe("string");
      expect(typeof c.logoUrl).toBe("string");
    });
  });
});
