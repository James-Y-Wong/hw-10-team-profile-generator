const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should set office Number via constructor arguments", () => {
            // Arrange
            const officeNumber = 100;
            // Act
            const manager = new Manager("Ashley", 100, "test@test.com", officeNumber)
            // Assert
            expect(manager.officeNumber).toBe(officeNumber);
        });
    });
    describe("Getter methods", () => {
        it("should get office number via getOffice()", () => {
            // Arrange
            const officeNumber = 100;
            // Act
            const manager = new Manager("Ashley", 100, "test@test.com", officeNumber);
            const managerOfficeNumber = manager.getOffice();
            // Assert
            expect(managerOfficeNumber).toBe(officeNumber);

        });
        it("should get role via getRole()", () => {
            // Arrange
            const role = "Manager";
            // Act
            const manager = new Manager("Ashley", 100, "test@test.com", 100);
            const managerRole = manager.getRole()
            // Assert
            expect(managerRole).toBe(role);
        });
    });
});