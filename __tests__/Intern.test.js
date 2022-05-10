const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should set school via constructor arguments", () => {
            // Arrange
            const school = "Georgia Tech";
            // Act
            const intern = new Intern("Ashley", 100, "test@test.com", school);
            // Assert
            expect(intern.school).toBe(school);
        });
    });
    describe("Getter methods", () => {
        it("should get school via getSchool()", () => {
            // Arrange
            const school = "Georgia Tech";
            // Act
            const intern = new Intern("Ashley", 100, "test@test.com", school);
            const internSchool = intern.getSchool();
            // Assert
            expect(internSchool).toBe(school);

        });
        it("should get role via getRole()", () => {
            // Arrange
            const role = "Intern";
            // Act
            const intern = new Intern("Ashley", 100, "test@test.com", "Georgia Tech");
            const internRole = intern.getRole()
            // Assert
            expect(internRole).toBe(role);
        });
    });
});