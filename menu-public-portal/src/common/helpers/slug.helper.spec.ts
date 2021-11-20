import { formatSlugFromUrlParam } from "./slug.helpers";

describe("common/helpers/slug.helpers specs", () => {
  describe("formatSlugFromUrlParam", () => {
    it("should return empty string when it feeds param equals undefined", () => {
      // Arrange
      const param: string = undefined;

      // Act
      const result = formatSlugFromUrlParam(param);

      // Assert
      expect(result).toEqual("");
    });

    it("should return empty string when it feeds param equals null", () => {
      // Arrange
      const param: string = null;

      // Act
      const result = formatSlugFromUrlParam(param);

      // Assert
      expect(result).toEqual("");
    });

    it("should return empty string when it feeds param equals empty string", () => {
      // Arrange
      const param: string = "";

      // Act
      const result = formatSlugFromUrlParam(param);

      // Assert
      expect(result).toEqual("");
    });

    it('should return formatted param when it feeds param equals "0"', () => {
      // Arrange
      const param: string = "0";

      // Act
      const result = formatSlugFromUrlParam(param);

      // Assert
      expect(result).toEqual("/0");
    });

    it('should return formatted param when it feeds param equals "test"', () => {
      // Arrange
      const param: string = "test";

      // Act
      const result = formatSlugFromUrlParam(param);

      // Assert
      expect(result).toEqual("/test");
    });
  });
});
