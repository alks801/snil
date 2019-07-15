import classCompose from "./class-compose";

describe("", () => {
  it("should compose main class and modificators", () => {
    // Arrange
    const clName = "some-class";
    const m1 = "modificator1";
    const m2 = "modificator2";
    const m3 = "modificator3";
    const m4 = { m: "modificator4" };

    const expectedResult =
      `${clName}` +
      ` ${clName}__${m1}` +
      ` ${clName}__${m2}` +
      ` ${clName}__${m3}` +
      ` ${clName}__${Object.keys(m4)[0]}-${m4.m}`;

    // Act
    const result = classCompose(clName, m1, m2, m3, m4);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
