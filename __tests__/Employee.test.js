const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should instantiate an employee instance", () => {
            // Arrange
            const employee = new Employee();
            // Assert
            expect(typeof employee).toBe("object");
            
        });
        it("should set name via contructor arguments", () => {
            // Arrange
            const name = "Ashley";
            // Act
            const employee = new Employee(name);
            // Assert
            expect(employee.name).toBe(name);
        });
        it("should set id via contructor arguments", () => {
            // Arrange
            const id = 100;
            // Act
            const employee = new Employee("Ashley", id);
            // Assert
            expect(employee.id).toBe(id);
        });
    });
    
});