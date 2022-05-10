const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should set GitHub username via constructor arguments", () => {
            // Arrange
            const github = "test@github.com";
            // Act
            const engineer = new Engineer("Ashley", 100, "test@test.com", github)
            // Assert
            expect(engineer.github).toBe(github);
        });
    });
    describe("Getter methods", () => {
        it("should get GitHub username via getGithub()", () => {
            // Arrange
            const github = "test@github.com";
            // Act
            const engineer = new Engineer("Ashley", 100, "test@test.com", github);
            const engineerGithub = engineer.getGithub();
            // Assert
            expect(engineerGithub).toBe(github);

        });
        it("should get role via getRole()", () => {
            // Arrange
            const role = "Engineer";
            // Act
            const engineer = new Engineer("Ashley", 100, "test@test.com", "test@github.com");
            const engineerRole = engineer.getRole()
            // Assert
            expect(engineerRole).toBe(role);
        });
    });
});